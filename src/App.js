import React from 'react';
import './App.css';
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="App">
        <div className="container">
          <div className="appName">Weather Forecast</div>
          <Search defaultCity="Porto" />
        </div>
      </div>
    </div>
  );
}


