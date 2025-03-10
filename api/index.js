const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const http = require('http');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const setupRoulette = require('./websockets/roulette');

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3333;

// Middleware
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Database Sync
sequelize.sync({ force: false })
    .then(() => console.log('Database & Tables Synced!'))
    .catch((error) => console.error('Error Syncing Database:', error));

// Routes
app.use('/users', userRoutes);
app.use('/sessions', sessionRoutes);

// Create HTTP server
const server = http.createServer(app);

// Setup WebSocket for Roulette
setupRoulette(server);

// Start the server
server.listen(SERVER_PORT, () => {
    console.log(`Server running on http://127.0.0.1:${SERVER_PORT}`);
});