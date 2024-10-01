import { useState, useRef } from 'react';

import ResultModal from '../ResultModal/ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const interval = targetTime * 1000;

  const [timeRemaining, setTimeRemaining] = useState(interval);

  const timerIsActive = timeRemaining > 0 && timeRemaining < interval;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  function resetHandle() {
    setTimeRemaining(interval);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        onReset={resetHandle}
        remainingTime={timeRemaining}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Timing is running...' : 'Timer incavtive'}
        </p>
      </section>
    </>
  );
}
