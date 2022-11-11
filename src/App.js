import React from "react";
import "./styles.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div class="weatherApp">
        <h1>
          Weather Forecast
          <form id="searching-form">
            <input
              class="search"
              type="search"
              autofocus="on"
              autocomplete="off"
              placeholder="Search city here"
              id="search-input"
            />
            <button type="submit" id="submit">
              <img
                src="img/search_icon.png"
                alt="search button"
                width="33px"
                height="45px"
              />
            </button>
            <img
              id="geolocation"
              src="img/location.png"
              alt="Currently Location"
            />
          </form>
        </h1>
        <small id="todaysDate">Wednesday August 3rd 2022, 12.00 </small>
        <Weather temperature={11} humidity={70} wind={6} />
        <p>
          <strong> The forecast for the next 5 days </strong>
        </p>
        <Forecast />
        <small>
          <a
            id="openCode"
            href="https://github.com/Viktoriia92/react-vanilla-forecast"
            alt="Open-source code"
            target="blank"
          >
            Open-source code
          </a>
          by Viktoriia Shabaieva
        </small>{" "}
      </div>
    </div>
  );
}
