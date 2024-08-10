import React from 'react';
import Timezone from './Timezone';
import './TimezoneList.css';


function TimezoneList({ timezones, currentTime, onRemoveTimezone }) {
  return (
    <ul className='timezone-list-container'>
      {timezones.map((timezone) => (
        <Timezone
          key={timezone.id}
          timezone={timezone}
          currentTime={currentTime}
          onRemove={() => onRemoveTimezone(timezone.id)}
        />
      ))}
    </ul>
  );
}

export default TimezoneList;
