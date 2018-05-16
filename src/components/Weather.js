import React from "react";
import Forecast from './Forecast';
import './Weather.css'

const Weather = props => {
  let {condition, location, forecast} = props;
  // ↑ is a short cut for ↓
  // let condition = this.props.condition;
  // let location = this.props.location;
  // let forecast = this.props.forecast;

  let high = forecast[0].high;
  let low = forecast[0].low;

  let nationalism = location.country;
  if (location.country === "United States"){
    nationalism = location.region
  }

  return (
    <div className="forecast">
      <h2>{location.city}, {nationalism}</h2>
      <div className="weather-info">
        <div className="current-info">
          <span  className="currently">Currently:</span>
          <span className="current-temp">{condition.temp}°</span>
          <span className="current-text">{condition.text}</span>
        </div>
        <div className="temp-low">Low: {low}°</div>
        <div className="temp-high">High: {high}°</div>
        {/* <div>code {condition.code}</div> */}
      </div>
      
      <div className="forecast-info">
        <h2>Six Day Forecast for {location.city}</h2>
        <ul>
        {forecast.map((dayInfo, index) => <Forecast key={index} info={dayInfo}/>).slice(1,7)}
        </ul>
      </div>
    </div>);
}

export default Weather;