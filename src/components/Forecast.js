import React from "react";

const Forecast = props => {

    
  return (
    <div className="forecastX">
      A {props.info.day} of weather for {props.info.date} -
      {props.info.high} -
      {props.info.low} -
      {props.info.text}

    </div>);
}

export default Forecast;