import React, { useState, useEffect } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('white'); 
  const [history, setHistory] = useState([]); 
  const [isAutoChange, setIsAutoChange] = useState(false); 


  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const changeColor = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    setHistory((prevHistory) => [...prevHistory, newColor]); 
  };

  const undoColor = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setColor(newHistory[newHistory.length - 1]); 
    }
  };

  useEffect(() => {
    let intervalId;
    if (isAutoChange) {
      intervalId = setInterval(() => {
        changeColor();
      }, 2000);
    }
    return () => clearInterval(intervalId); 
  }, [isAutoChange]);

  return (
    <div style={{ 
      textAlign: 'center', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: 'white' 
    }}>
      <h1>Random Color</h1>

      {}
      <div style={{ padding: '20px' }}>
        <div style={{ backgroundColor: color, width: '100px', height: '100px', margin: '0 auto' }}></div>
        <h3>Current Color: {color}</h3>
      </div>

      {}
      <button onClick={changeColor}>Change Background Color</button>
      <button onClick={undoColor} disabled={history.length <= 1}>Undo</button>
      <button onClick={() => setIsAutoChange(!isAutoChange)}>
        {isAutoChange ? 'Stop Auto Change' : 'Start Auto Change'}
      </button>

      {}
      <div>
        <h3>History:</h3>
        <ul>
          {history.map((c, index) => (
            <li key={index} style={{ color: c }}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RandomColor;
