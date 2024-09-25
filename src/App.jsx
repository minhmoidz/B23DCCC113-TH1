import React from 'react';
import Bai1 from "./todoList/Bai1.jsx"; 
import Bai3 from "./RandomColor/Bai3.jsx"; 
import Bai2 from "./SearchImage/Bai2.jsx"; 
import './App.css'; // Thêm file CSS

function App() {
  return (
    <div className="app-container">
      <div className="box">
        <Bai1 /> 
      </div>
      <div className="box">
        <Bai3 />
      </div>
      <div className="box">
        <Bai2 />
      </div>
    </div>  
  );
}

export default App;
