import React from "react";

const TimeElapsedActivateButton = ({ timer, onStartTimer, onStopTimer }) => {
  return timer.isRunning ? (
    <button className="stopBtn" onClick={() => onStopTimer()}>STOP</button>
  ) : (
    <button className="startBtn" onClick={() => onStartTimer()}>START</button>
  );
};

export default TimeElapsedActivateButton;
