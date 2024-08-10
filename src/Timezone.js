import React from 'react';
import './Timezone.css';


function Timezone({ timezone, currentTime, onRemove }) {
  const timeInTimezone = new Date(currentTime);
  timeInTimezone.setHours(timeInTimezone.getHours() + timezone.offset);

  return (
    <li className="timezone-item">
      <span>{timezone.name}: {timeInTimezone.toLocaleString()}</span>
      <button onClick={onRemove}>X</button>
    </li>
  );
}

export default Timezone;
