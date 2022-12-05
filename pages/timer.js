import React, { useState } from "react";

function Stopwatch() {
  var seconds = 0;
  var tens = 0;

  const [time, setTime] = useState({
    tens: 0,
    seconds: 0,
  });

  const [Interval, setIntervalValue] = useState({
    tens: 0,
    seconds: 0,
  });

  const handleClickStart = () => {
    setIntervalValue(clearInterval(Interval));
    setIntervalValue(setInterval(startStopwatch, 10)); // millisecond 10 = 0.01 second
  };
  const handleClickStop = () => {
    setIntervalValue(clearInterval(Interval));
  };
  const handleClickReset = () => {
    setIntervalValue(clearInterval(Interval));
    tens = 0;
    seconds = 0;

    setTime({
      tens: 0,
      seconds: 0,
    });
  };
  const startStopwatch = () => {
    console.log("Call Startstopwatch");
    tens++;
    if (tens <= 9) {
    }
    if (tens > 9) {
    }
    if (tens > 99) {
      seconds++;

      tens = 0;
    }
    if (seconds > 9) {
    }
    console.log("seconds", seconds);
    console.log("tens", tens);
    setTime({
      seconds,
      tens,
    });
  };
  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <p id="time">
        <span id="seconds">{time.seconds}</span>:
        <span id="tens">{time.tens}</span>
      </p>
      <button id="btn-start" onClick={handleClickStart}>
        Start
      </button>
      <button id="btn-stop" onClick={handleClickStop}>
        Stop
      </button>
      <button id="btn-reset" onClick={handleClickReset}>
        Reset
      </button>
    </div>
  );
}
export default Stopwatch;
