import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Login from './components/LoginForm/Login';
function App() {

  

  return (
    <div className="App">

      {/* Navbar */}
      <Navbar/>
      <Login/>
    </div>
  );
}

export default App;
