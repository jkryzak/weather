import React from "react";

const Forecast = props => {

  return (
    <div className="day">
      <h3>{props.info.day}</h3>
      <p><small>{props.info.text}</small></p>
      <p>Low: {props.info.low}<br/>
      High: {props.info.high}</p>
    </div>);
}

export default Forecast;