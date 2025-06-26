import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserForm from './containers/organisms/userForm';
import Button from './components/atoms/Button';
import { axiosRequests } from './helpers/request';
import ChakraShowcase from './components/ChakraUIShowcase';

function App() {
 const [data, setData] = useState(null);
 const [data2, setData2] = useState(null);

 // trigger fetch to the public API
  useEffect(() => {
    // fetch('http://localhost:5000')
    //   .then(response => setData(response))
    //   .catch(error => console.error(error));
          axiosRequests.get("http://localhost:5000/users")
          .then(response => {
                console.log("response", response);
            })
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
          onClick={() => fetch('http://localhost:5000/users')
            .then(response => setData2(response))
            .catch(error => console.error(error))}
          rel="noopener noreferrer"
        >
          Click to test API proxy
        </a>
      </header>
      <section>
        <h1 className="text-3xl font-bold underline">
          Subscribe
        </h1>
        <Button />
        <UserForm />
      </section>
      <section>
        <ChakraShowcase />
      </section>
    </div>
  );
}

export default App;
