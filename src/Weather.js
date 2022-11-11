import React from "react";
import "./styles.css";

export default function Weather(props) {
  return (
    <h2>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="currentlyCity" id="currentlyCity">
              Kiev{" "}
              <p class="country">
                {" "}
                <strong> ua </strong>
              </p>
            </div>
            <span class="currentlyTemperature" id="currentlyTemperature">
              {props.temperature}°C
            </span>
          </div>
          <div class="col-md-4">
            <img
              class="mainImg"
              id="mainImg"
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="Cloudy"
              width="130"
              height="130"
            />
          </div>
          <div class="col-md-4">
            <div class="col" id="description">
              Partly cloudy
            </div>
            <div class="col" id="humidity">
              Humidity: {props.humidity}%
            </div>
            <div class="col" id="wind">
              Wind: {props.wind}m/s
            </div>
          </div>
        </div>
      </div>
    </h2>
  );
}
