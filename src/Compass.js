import React from "react";
import compass from "./images/compass.png";

export default function Compass({ data }) {
  const deg = data.compass;

  function degToCompass() {
    let val = Math.floor(deg / 22.5 + 0.5);
    let name = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return name[val % 16];
  }
  return (
    <div>
      {" "}
      <img src={compass} alt="compass" width="18px" className="compass" />{" "}
      {degToCompass()}
    </div>
  );
}
