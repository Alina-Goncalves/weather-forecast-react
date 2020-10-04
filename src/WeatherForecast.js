import React from "react";
import "./WeatherForecast.css";
import ForecastIcon from "./ForecastIcon";

export default function WeatherForecast({ data }) {
  function hours() {
    let date = new Date(data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function maxTemperature() {
    let maxTemperature = Math.round(data.main.temp_max);
    return `${maxTemperature}`;
  }

  function minTemperature() {
    let minTemperature = Math.round(data.main.temp_min);
    return `${minTemperature}`;
  }

  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="weatherSymbols">
            <ForecastIcon code={data.weather[0].icon} />
          </div>
          <br />
          <strong>{hours()}</strong>
          <br />
          <br />
          <div className="temperature">
            <span className="maxTemperature"> {maxTemperature()}</span>° /
            <span className="minTemperature"> {minTemperature()}</span>°
          </div>
        </div>
      </div>
    </div>
  );
}
