import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MovieData } from "./components/MovieData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieData />
      </header>
    </div>
  );
}

export default App;
