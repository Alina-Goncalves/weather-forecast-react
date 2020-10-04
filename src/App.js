import React from "react";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="App">
        <div className="container">
          <div className="appName">Weather Forecast</div>
          <Search defaultCity="Porto" />
          <Footer />
        </div>
      </div>
    </div>
  );
}
