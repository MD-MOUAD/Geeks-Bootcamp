import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const tick = () => {
    setCurrentDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="clock-container">
      <h2>Current Time:</h2>
      <p className="clock-time">{currentDate.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
