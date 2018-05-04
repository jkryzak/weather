import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Forecast from './components/Forecast';

class App extends Component {

  state = {
    temp: undefined,
    text: undefined,
    city: undefined,
    state: undefined,
    country: undefined
  }

  getForecast = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    const api_call = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select%20location%2C%20item.condition.temp%2C%20item.condition.text%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${location}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
    
    const data = await api_call.json();

    if (location) {
      console.log(data);

      this.setState({
        temp: data.query.results.channel.item.condition.temp,
        text: data.query.results.channel.item.condition.text,
        city: data.query.results.channel.location.city,
        state: data.query.results.channel.location.region,
        country: data.query.results.channel.location.country,
        error: ""
      });
    } else {
      this.setState({
        temp: undefined,
        text: undefined,
        city: undefined,
        state: undefined,
        error: "You forgot something."
      })      
    }
  }

  render() {
    return (
      <div className="container">
        <Title />
        <Form getForecast={this.getForecast} />
        <Forecast 
          temp={this.state.temp}
          text={this.state.text}
          city={this.state.city}
          state={this.state.state}
          error={this.state.error}
        />
      </div>
      
    );
  }
}

export default App;
