import React from "react";
import Forecast from './Forecast';

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
      <div>
        <h3>{location.city}, {nationalism}</h3>
        <p>Currently: <strong>{condition.temp}°</strong> and {condition.text}</p>
        <p>
          Low: {low}°<br />
          High: {high}°
        </p>
        <p><small>(code: {condition.code})</small></p>
        <div>
          <div>Forecast stuff here</div>
          {forecast.map((dayInfo, index) => <Forecast key={index} info={dayInfo}/>).slice(1,7)}
        </div>
      </div>
    </div>);
}

export default Weather;