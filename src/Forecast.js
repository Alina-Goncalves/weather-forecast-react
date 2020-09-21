import React from "react";
import "./Forecast.css";
import sun from "./images/sun.png";
import fog from "./images/fog.png";
import sunBigCloud from "./images/sun-big-cloud.png";
import sunSmallCloud from "./images/sun-small-cloud.png";

export default function Forecast() {
  return (
    <div className="row" id="forecast">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className="weatherSymbols">
              <img src={sunSmallCloud} alt="sun-small-cloud" />
            </div>
            <br />
            <strong>11:00</strong>
            <br />
            <br />
            <div className="temperature">
              <span className="maxTemperature"> 23</span>° /
              <span className="minTemperature"> 21</span>°
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className="weatherSymbols">
              <img src={sun} alt="sun" />
            </div>
            <br />
            <strong>12:00</strong>
            <br />
            <br />
            <div className="temperature">
              <span className="maxTemperature"> 26</span>° /
              <span className="minTemperature"> 23</span>°
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className="weatherSymbols">
              <img src={sunSmallCloud} alt="sun-small-cloud" />
            </div>
            <br />
            <strong>15:00</strong>
            <br />
            <br />
            <div className="temperature">
              <span className="maxTemperature"> 25</span>° /
              <span className="minTemperature"> 20</span>°
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className="weatherSymbols">
              <img src={sunBigCloud} alt="sun-big-cloud" />
            </div>
            <br />
            <strong>18:00</strong>
            <br />
            <br />
            <div className="temperature">
              <span className="maxTemperature"> 21</span>° /
              <span className="minTemperature"> 17</span>°
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className="weatherSymbols">
              <img src={fog} alt="fog" />
            </div>
            <br />
            <strong>21:00</strong>
            <br />
            <br />
            <div className="temperature">
              <span className="maxTemperature"> 18</span>° /
              <span className="minTemperature"> 15</span>°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
