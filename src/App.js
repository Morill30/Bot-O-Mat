import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar1 from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import LeaderBoard from "./components/leaderBoard";

function App() {
  return (
    <div className="App">
      <NavBar1></NavBar1>
      <div className="inline">
        <Home></Home>
        <LeaderBoard></LeaderBoard>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Powerd using <code>React.js</code> for Red Ventures.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
