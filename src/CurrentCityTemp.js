import React from "react";
import "./CurrentCityTemp.css";

export default function CurrentCityTemp({ data }) {
  return (
    <div className="CurrentCityTemp">
      <br />
      <h1>{data.city}</h1>
      <br />
      <h2>{Math.round(data.temperature)}</h2>
      <div className="units">
        <a href="#/" className="degrees active">
          °C
        </a>
        <span className="bar">|</span>
        <a href="#/" className="fahrenheit">
          °F
        </a>
      </div>
    </div>
  );
}
