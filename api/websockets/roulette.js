const socketIo = require('socket.io');

let countdown = 15;
let lastRoll = 0;
let spinningInProgress = false;
let spinStartTime = null;

const startCountdown = (io) => {
  setInterval(() => {
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
    console.log("Roulette Timer: " + countdown);
  }, 1000);
};

const setupRoulette = (server) => {
  const io = socketIo(server, {
    path: "/roulette",
    cors: { origin: "http://localhost:3000", credentials: true },
  });

  io.on('connection', (socket) => {
    console.log('User connected to Roulette');

    let elapsedSpinTime = spinningInProgress ? (Date.now() - spinStartTime) / 1000 : 0;

    socket.emit('initialState', {
      countdown,
      spinningInProgress,
      lastRoll,
      elapsedSpinTime
    });

    socket.on('disconnect', () => console.log('User disconnected from Roulette'));
  });

  startCountdown(io);
};

module.exports = setupRoulette;