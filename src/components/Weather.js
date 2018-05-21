import React from "react";
import Forecast from './Forecast';
import './Weather.css';
import drops from '../cloud-raindrops.svg';
import flakes from '../cloud-snowflakes.svg';
import cloud from '../cloud.svg';
import sun from '../sun.svg';
import windy from '../wind.svg';
import fog from '../cloud-fog.svg';

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

  // let weathertype = condition.code;
  // if (condition.code === 26 || 27 || 28 || 29 || 30 || 44){
  //   weathertype = this.cloudy
  // } 
  // if (condition.code === 23 || 24){
  //   weathertype = this.windy
  // }

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

          {condition.code === '26' && 
            <img src={cloud} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '27' && 
            <img src={cloud} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '28' && 
            <img src={cloud} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '29' && 
            <img src={cloud} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '30' && 
            <img src={cloud} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '44' && 
            <img src={cloud} alt={condition.text} className="weather-icon"/>
          }

          {condition.code === '47' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '45' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '40' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '39' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '38' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '37' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '35' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '18' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '17' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '12' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '11' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '10' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '9' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '6' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '5' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '4' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '3' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '1' && 
            <img src={drops} alt={condition.text} className="weather-icon"/>
          }

          {condition.code === '32' && 
            <img src={sun} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '34' && 
            <img src={sun} alt={condition.text} className="weather-icon"/>
          }

          {condition.code === '19' && 
            <img src={fog} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '20' && 
            <img src={fog} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '21' && 
            <img src={fog} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '22' && 
            <img src={fog} alt={condition.text} className="weather-icon"/>
          }          

          {condition.code === '46' && 
            <img src={flakes} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '43' && 
            <img src={flakes} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '42' && 
            <img src={flakes} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '41' && 
            <img src={flakes} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '16' && 
            <img src={flakes} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '15' && 
            <img src={flakes} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '14' && 
            <img src={flakes} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '7' && 
            <img src={flakes} alt={condition.text} className="weather-icon"/>
          }

          {condition.code === '23' && 
            <img src={windy} alt={condition.text} className="weather-icon"/>
          }
          {condition.code === '24' && 
            <img src={windy} alt={condition.text} className="weather-icon"/>
          }       
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