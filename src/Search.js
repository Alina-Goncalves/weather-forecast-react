import React, { useState } from "react";
import "./Search.css";
import pushpin from "./images/pushpin.png";
import bigEmoji from "./images/sun-big-cloud.png";
import axios from "axios";
import CurrentCityTemp from "./CurrentCityTemp";
import Info from "./Info";

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
    });
  }

  function apiSearch() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=06b5f102b5d87678883f70debd49073e&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (response.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter a City"
                  autoComplete="off"
                  autoFocus="on"
                  className="Form-control"
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
        <CurrentCityTemp data={response} />
        <div className="bigWeatherSymbol">
          <img src={bigEmoji} alt="Sun" />
        </div>
        <Info data={response} />
      </div>
    );
  } else {
    apiSearch();
    return "Loading...";
  }
}
