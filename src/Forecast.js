import React from "react";
import "./styles.css";

export default function Forecast() {
  return (
    <h3>
      <div class="container" id="forecast">
        <div class="row">
          <div class="col-md">
            <div class="days">
              <div id="forecastTodaysDay">SUN</div>
              <div class="date">1 January</div>
              <span class="temperature"> 13-15 °C</span>
              <img
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt="Sunshine"
                width="90"
                height="96"
              />
              <div class="information">Sunny</div>
            </div>
          </div>
          <div class="col-md">
            <div class="days">
              <div id="forecastSecondDay">MON</div>
              <div class="date">2 January</div>
              <span class="temperature"> 15-17 °C</span>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="Rainy"
                width="90"
                height="96"
              />
              <div class="information">Rainy</div>
            </div>
          </div>
          <div class="col-md">
            <div class="days">
              <div>TUE</div>
              <div class="date">3 January</div>
              <span class="temperature"> 17-21 °C</span>
              <img
                src="http://openweathermap.org/img/wn/50d@2x.png"
                alt="Windy"
                width="90"
                height="96"
              />
              <div class="information">Windy</div>
            </div>
          </div>
          <div class="col-md">
            <div class="days">
              <div>TUE</div>
              <div class="date">3 January</div>
              <span class="temperature"> 17-21 °C</span>
              <img
                src="http://openweathermap.org/img/wn/50d@2x.png"
                alt="Windy"
                width="90"
                height="96"
              />
              <div class="information">Windy</div>
            </div>
          </div>
          <div class="col-md">
            <div class="days">
              <div>THU</div>
              <div class="date">5 January</div>
              <span class="temperature"> 16-19 °C</span>
              <img
                src="http://openweathermap.org/img/wn/04d@2x.png"
                alt="Сloudy"
                width="90"
                height="96"
              />
              <div class="information">Сloudy</div>
            </div>
          </div>
        </div>
      </div>
    </h3>
  );
}
