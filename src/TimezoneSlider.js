import React from 'react';
import './TimezoneSlider.css';


function TimezoneSlider({ time, onTimeChange }) {
  const handleSliderChange = (event) => {
    const newTime = new Date(time.getTime());
    newTime.setHours(newTime.getHours() + parseInt(event.target.value));
    onTimeChange(newTime);
  };

  return (
    <div className='slider-container'>
      <input
        type="range"
        min="-12"
        max="12"
        value="0"
        onChange={handleSliderChange}
      />
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default TimezoneSlider;
