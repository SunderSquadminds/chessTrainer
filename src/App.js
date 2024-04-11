import logo from './logo.svg';
import './App.css';
import Board, { getCellState } from './components/Board'
import React, { useState } from 'react';



function App() {
  const [cellState, setCellState] = useState(getCellState())
  const [color, setColor] = useState('#282c34')
  return (
    <div className="App">
      <Board cell={cellState} setCellState={setCellState} setColor={setColor} />
      <div className='Ques'>
        <div style={{ backgroundColor: color }}>
          {cellState}
        </div>
      </div>
    </div>
  );
}

export default App;
