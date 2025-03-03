import React, { useState, useEffect } from 'react';
import TimezoneList from './TimezoneList';
import TimezoneSlider from './TimezoneSlider';
import Header from './Header';
import HomePage from './HomePage';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timezones, setTimezones] = useState([
    { id: 1, name: 'UTC', offset: 0 },
    { id: 2, name: 'IST', offset: 5.5 },
  ]);
  const [darkMode, setDarkMode] = useState(false);

  const handleTimeChange = (time) => {
    setCurrentTime(time);
  };

  const addTimezone = (name, offset) => {
    setTimezones([...timezones, { id: Date.now(), name, offset }]);
  };

  const removeTimezone = (id) => {
    setTimezones(timezones.filter((tz) => tz.id !== id));
  };

  const reverseOrder = () => {
    setTimezones([...timezones].reverse());
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div className="container">
        <h1 className='heading'>Timezone-Converter</h1>
        <Header
          onAddTimezone={addTimezone}
          onReverseOrder={reverseOrder}
          onToggleDarkMode={toggleDarkMode}
        />
        <TimezoneSlider time={currentTime} onTimeChange={handleTimeChange} />
        <TimezoneList
          timezones={timezones}
          currentTime={currentTime}
          onRemoveTimezone={removeTimezone}
        />
      </div>
    </div>
  );
}

export default App;
