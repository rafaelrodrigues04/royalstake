import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'
import styles from './Roulette.module.css'

const Roulette = () => {
  const [spinning, setSpinning] = useState(false)
  const [wheelPosition, setWheelPosition] = useState(0)
  const [timer, setTimer] = useState(15.0)
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [spinDuration, setSpinDuration] = useState(0)

  const animationRef = useRef(null)
  const socketRef = useRef(null)

  const wheelData = [
    { color: 't', value: 1 }, { color: 'ct', value: 14 },
    { color: 't', value: 2 }, { color: 'ct', value: 13 },
    { color: 't', value: 3 }, { color: 'ct', value: 12 },
    { color: 't', value: 4 }, { color: 'crown', value: 0 },
    { color: 'ct', value: 11 }, { color: 't', value: 5 },
    { color: 'ct', value: 10 }, { color: 't', value: 6 },
    { color: 'ct', value: 9 }, { color: 't', value: 7 },
    { color: 'ct', value: 8 }
  ];

  const initWheel = () => {
    return Array.from({ length: 29 }, (_, i) => (
      <div className={styles.row} key={i}>
        {wheelData.map((card, index) => (
          <div key={index} className={`${styles.card} ${styles[card.color]} ${isTimerActive ? 'opacity-50' : ''}`}>
            {card.value}
          </div>
        ))}
      </div>
    ));
  };

  const spinWheel = (roll, duration = 6) => {
    const order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4]
    const position = order.indexOf(roll)
  
    const rows = 12
    const card = 100 + 1 * 2
    let landingPosition = (rows * 15 * card) + (position * card)
  
    const randomize = Math.floor(Math.random() * 75) - 37
    landingPosition += randomize
  
    setWheelPosition(landingPosition)
    setSpinning(true)
    setIsTimerActive(false)
    setSpinDuration(duration)
  
    setTimeout(() => {
      setSpinning(false)
      setWheelPosition(landingPosition)
  
      // Increase the delay to 1000ms for smoother reset and sync countdown
      setTimeout(() => {
        setWheelPosition(0)
        // Reset roulette to position 0
        setSpinDuration(0.5)
        // Start timer after reset animation
        startTimer()
      }, 1000);
    }, duration * 1000)
  };  

  const startTimer = () => {
    setIsTimerActive(true)
    setTimer(15.0)
  };

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io('http://localhost:3333', { path: '/roulette', withCredentials: true });
  
      socketRef.current.on('connect', () => {
        const currentTime = new Date().toLocaleTimeString();
        console.log(`Connected to WebSocket at ${currentTime}`);
      });
  
      socketRef.current.on('disconnect', () => {
        const currentTime = new Date().toLocaleTimeString();
        console.log(`Disconnected at ${currentTime}`);
      });
  
      socketRef.current.on('initialState', (state) => {
        console.log('Received initial state:', state);
        setTimer(state.countdown);
        setSpinning(state.spinningInProgress);
        setWheelPosition(state.wheelPosition);
  
        if (state.spinningInProgress) {
          const remainingTime = Math.max(0, 6 - state.elapsedSpinTime);
          spinWheel(state.lastRoll, remainingTime);
        }
      });
  
      socketRef.current.on('countdown', (remainingTime) => {
        const currentTime = new Date().toLocaleTimeString();
        console.log(`New countdown started at ${currentTime}: ${remainingTime} seconds remaining`);
  
        setIsTimerActive(true);
        // Capture the start time (ms)
        const startTime = Date.now();
        // Calculate the end time based on the countdown
        const endTime = startTime + remainingTime * 1000;
  
        const updateCountdown = () => {
          const currentTime = Date.now();
          // Calculate the time left in seconds
          const timeLeft = Math.max(0, (endTime - currentTime) / 1000);
  
          // Ensure the timer is always a valid number and set it with two decimal places
          setTimer((prevTimer) => {
            // Ensure it is a valid number and has two decimal places
            const validTimer = parseFloat(timeLeft.toFixed(2));
            // If it is not a valid number, set it to 0
            return isNaN(validTimer) ? 0 : validTimer; 
          });
  
          if (timeLeft <= 0) {
            // Stop the countdown once it reaches 0
            clearInterval(interval);
          }
        };
  
        // Update the countdown every 10ms (for smooth decrement)
        const interval = setInterval(updateCountdown, 10);
      });
  
      socketRef.current.on('rouletteRoll', ({ roll, remainingTime }) => {
        spinWheel(roll, remainingTime);
      });
    }
  
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, []);
  

  return (
    <div className="flex flex-col items-center w-full mt-24 md:px-4">
      <div className="container flex justify-center max-w-screen-xl">
        <div className={styles.rouletteWrapper}>
          {isTimerActive && (
            <div className={styles.timer}>
              <h6 className="text-white text-base uppercase">Rolling In</h6>
              <h4 className="text-white text-3xl font-bold">{timer.toFixed(2)}</h4>
            </div>
          )}
          {!isTimerActive && <div className={styles.selector}></div>}
          <div
            className={`${styles.wheel} ${spinning ? styles.spinning : ''}`}
            style={{
              transform: `translate3d(-${wheelPosition}px, 0, 0)`,
              transitionDuration: `${spinDuration}s`
            }}
          >
            {initWheel()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roulette;
