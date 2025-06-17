import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
 const [data, setData] = useState(null);
 const [data2, setData2] = useState(null);

 // trigger fetch to the public API
  useEffect(() => {
    fetch('http://localhost:5000/public')
      .then(response => setData(response))
      .catch(error => console.error(error));
  }, []);

  console.log("Data du fetch public", data)
  console.log("Data du fetch private (trigger on click)", data2)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={() => fetch('http://localhost:5000/private')
            .then(response => setData2(response))
            .catch(error => console.error(error))}
          rel="noopener noreferrer"
        >
          Click to test API proxy
        </a>
      </header>
    </div>
  );
}

export default App;
