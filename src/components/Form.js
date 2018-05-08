import React from 'react';
import Forecast from './Forecast';

class Form extends React.Component {

  state = {
    location: '',
    temp: undefined,
    text: undefined,
    low: undefined,
    high: undefined,
    city: undefined,
    state: undefined,
    country: undefined
  }

  getForecast = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    const api_call = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select%20location%2C%20item.condition%2C%20weather.forecast%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${location}%22)&format=json`);
    const data = await api_call.json(); // everything that comes back will be saved as 'data'
    if (location) { //if a location is returned...
      console.log(data); // toss all the info in the console...
      this.setState({ // change the state to this...
        temp: data.query.results.channel.item.condition.temp, // assign 'temp' to be this path of the json that's returned
        text: data.query.results.channel.item.condition.text,
        code: data.query.results.channel.item.condition.code,
        low: data.query.results.channel.item.forecast[0].low,// assign 'low' to be this path of the json array that's returned, the 0th item in this case
        high: data.query.results.channel.item.forecast[0].high,
        city: data.query.results.channel.location.city,
        state: data.query.results.channel.location.region, // assign 'state' to be this path of the json that's returned -region
        country: data.query.results.channel.location.country,
        error: undefined, // if the error message is present, this will clear it out
        location: ''
      });
    } else {
      this.setState({
        error: "You forgot something.",
        city: undefined // if forecast data is present, this will clear it out -specifically 'city' because that's what's used to display city on /forecast
      })
    }
  }

  render() {
    return (
      <div className="weather-form">
        <form onSubmit={this.getForecast}>
          <label className="sr-only">Location</label>
          <input type="text" name="location" className="location-input" autoFocus required
            value={this.state.location}
            onChange={(event) => this.setState({ location: event.target.value })}
            placeholder="Enter City, State or ZIP" 
          />
          <button>Submit</button>
        </form>
        <Forecast
          temp={this.state.temp}
          text={this.state.text}
          code={this.state.code}
          low={this.state.low}
          high={this.state.high}
          city={this.state.city}
          state={this.state.state}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default Form;