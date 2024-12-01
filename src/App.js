import React from 'react';
import './App.css';
import Board from './components/Board';

function App() {

  return (
    <div>
      <header style={{ padding: '10px', textAlign: 'center', backgroundColor: '#007bff', color: 'white'}}>
      <h1>Task Manager App</h1>
      </header>
      <Board />
    </div>
  );
}

export default App;
