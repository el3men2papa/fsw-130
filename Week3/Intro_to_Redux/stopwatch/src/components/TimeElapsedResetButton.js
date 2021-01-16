import React from "react";

const TimeElapsedResetButton = ({ onResetTimer }) => {
  return <button className="resetBtn" onClick={() => onResetTimer()}>RESET</button>;
};

export default TimeElapsedResetButton;
