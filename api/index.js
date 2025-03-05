const dotenv = require('dotenv');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io'); // Import socket.io
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

// DotEnv Init
dotenv.config();

// Define Server Port
const SERVER_PORT = process.env.SERVER_PORT || 3333

app.use(cookieParser());

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)

// Parse JSON payloads Middleware
app.use(express.json());

// Sync Database (Make sure models are loaded before sync)
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & Tables Synced!');
    })
    .catch((error) => {
        console.error('Error Syncing Database:', error);
    });

// Get /users Routes from routes/userRoutes.js file
app.use('/users', userRoutes);

// Get /sessions Routes from routes/sessionRoutes.js file
app.use('/sessions', sessionRoutes);

// Create HTTP server to handle both REST and WebSocket
const server = http.createServer(app);

// Initialize WebSocket server with the HTTP server
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000", // Same as your frontend URL
        credentials: true,
    }
});

let countdown = 15;
let lastRoll = 0;
let spinningInProgress = false;
let spinStartTime = null;

const startCountdown = () => {
  const countdownInterval = setInterval(() => {
    if (countdown > 0 && !spinningInProgress) {
      io.emit('countdown', countdown);
      countdown--;
    } else if (countdown === 0 && !spinningInProgress) {
      lastRoll = Math.floor(Math.random() * 15);
      spinStartTime = Date.now();
      spinningInProgress = true;
      
      io.emit('rouletteRoll', { roll: lastRoll, remainingTime: 6 });

      setTimeout(() => {
        spinningInProgress = false;
        countdown = 15;
        setTimeout(() => io.emit('resetWheel'), 3000);
      }, 7000);
    }
    console.log("Timer: " + countdown);
  }, 1000);
};

io.on('connection', (socket) => {
  console.log('User connected');

  let elapsedSpinTime = spinningInProgress ? (Date.now() - spinStartTime) / 1000 : 0;
  let remainingSpinTime = Math.max(0, 6 - elapsedSpinTime);

  socket.emit('initialState', {
    countdown,
    spinningInProgress,
    lastRoll,
    elapsedSpinTime
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

startCountdown();

// Start server
server.listen(SERVER_PORT, () => {
    console.log(`Server running on http://127.0.0.1:${SERVER_PORT}`);
});