import useInterval from "@/hooks/interval";
import React, { useState } from "react";
import Button from "./button";

const IntervalComponent = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(null);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useInterval(increment, time);

  function itemClicked(id) {
    switch (id) {
      case "start":
        setTime(1000);
        break;
      case "stop":
        setTime(null);
        break;
      case "reset":
        setCount(0);
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex flex-col items-center gap-2 rounded-md border border-slate-800 p-3">
      <div>{time ? `Counting: ${count}` : `Stopped: ${count}`}</div>
      <div className="flex gap-3">
        <Button onClick={() => itemClicked("start")}>Start</Button>
        <Button onClick={() => itemClicked("stop")}>Stop</Button>
        <Button onClick={() => itemClicked("reset")}>Reset</Button>
      </div>
    </div>
  );
};

export default IntervalComponent;
