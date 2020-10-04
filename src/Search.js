import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import pushpin from "./images/pushpin.png";
import ConvertUnit from "./ConvertUnit";
import PresentDate from "./PresentDate";
import Info from "./Info";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";

export default function Search({ defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  const [response, setResponse] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    apiSearch();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setResponse({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      dayMaxTemp: response.data.main.temp_max,
      dayMinTemp: response.data.main.temp_min,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      compass: response.data.wind.deg,
      icon: response.data.weather[0].icon,
    });
  }

  function apiSearch() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=06b5f102b5d87678883f70debd49073e&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (response.ready) {
    return (
      <div className="Search">
        <form id="inputForm" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter a City"
                  autoComplete="off"
                  autoFocus="on"
                  className="form-control"
                  onChange={updateCity}
                />
              </div>
              <button>
                <img
                  src={pushpin}
                  alt="location-pin"
                  width="24px"
                  className="pinLocation"
                />
              </button>
            </div>
          </div>
        </form>
        <div>
          <br />
          <h1>{city}</h1>
          <br />
        </div>
        <ConvertUnit
          celsius={response.temperature}
          dayMaxTemp={response.dayMaxTemp}
          dayMinTemp={response.dayMinTemp}
        />
        <PresentDate data={response} />
        <WeatherIcon code={response.icon} alt={response.description} />
        <Info data={response} />
        <Forecast  city={response.city} />
      </div>
    );
  } else {
    apiSearch();
    return "Loading...";
  }
}
