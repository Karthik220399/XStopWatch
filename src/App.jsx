import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [isRunning, setisRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => {
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (sec) => {
    const mins = Math.floor(sec / 60);
    const remaining = sec % 60;
    return `${mins}:${remaining < 10 ? "0" : ""}${remaining}`;
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <button
        onClick={() => {
          setisRunning((prev) => {
            return !prev;
          });
        }}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        onClick={() => {
          setisRunning(false);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
