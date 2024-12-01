import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error fetching data:', error))
  })

  return (
    <div>
      <h1>Task Manager App</h1>
      <p>{ message }</p>
    </div>
  );
}

export default App;
