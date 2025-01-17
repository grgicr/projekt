import React from "react";
import Register from "./Register"; // Import nove komponente
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Registracija korisnika</h1>
          <Register /> {/* Uključuje obrazac za registraciju */}
        </header>
      </div>
  );
}

export default App;
