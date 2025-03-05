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
    socketRef.current = io('http://localhost:3333')

    socketRef.current.on('initialState', (state) => {
      console.log('Received initial state:', state)
      setTimer(state.countdown)
      setSpinning(state.spinningInProgress)
      setWheelPosition(state.wheelPosition)

      if (state.spinningInProgress) {
        const remainingTime = Math.max(0, 6 - state.elapsedSpinTime)
        spinWheel(state.lastRoll, remainingTime)
      }
    })

    socketRef.current.on('countdown', (remainingTime) => {
      console.log('Received countdown from server:', remainingTime)
      setTimer(remainingTime)
      setIsTimerActive(true)
    });

    socketRef.current.on('rouletteRoll', ({ roll, remainingTime }) => {
      console.log('Received roll:', roll)
      spinWheel(roll, remainingTime)
    })

    return () => {
      socketRef.current.disconnect()
    }
  }, [])

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
