import React, { useState } from 'react';
import './Header.css';


function Header({ onAddTimezone, onReverseOrder, onToggleDarkMode }) {
  const [name, setName] = useState('');
  const [offset, setOffset] = useState(0);

  const handleAddTimezone = () => {
    onAddTimezone(name, parseFloat(offset));
    setName('');
    setOffset(0);
  };

  return (
    <header className="header">
      <input
        type="text"
        placeholder="Timezone Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Offset"
        value={offset}
        onChange={(e) => setOffset(e.target.value)}
      />
      <button onClick={handleAddTimezone}>Add Timezone</button>
      <button onClick={onReverseOrder}>Reverse Order</button>
      <button onClick={onToggleDarkMode}>Toggle Dark Mode</button>
    </header>
  );
}

export default Header;
