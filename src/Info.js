import React from "react";
import "./Info.css";
import humidity from "./images/humidity.png";
import windFace from "./images/windFace.png";
import compass from "./images/compass.png";

export default function Info({ data }) {
  return (
    <div className="Info">
      <div className="weatherDescription"> {data.description}</div>
      <ul className="dayInfo">
        <li>
          <img
            src={humidity}
            alt="humidity"
            width="18px"
            className="emojiInfo"
          />
          <span>{data.humidity} %</span>
        </li>
        <li>
          <img
            src={windFace}
            alt="wind-face"
            width="18px"
            className="emojiInfo"
          />
          <span>{Math.round(data.wind * 3.6)} km/h</span>
        </li>
        <li>
          <img src={compass} alt="compass" width="18px" className="compass" />
          <span> WNW</span>
        </li>
        <br />
      </ul>
    </div>
  );
}
