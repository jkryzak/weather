import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Forecast from './components/Forecast';

const API_KEY = "dj0yJmk9NXJQVDI1d2thUFlOJmQ9WVdrOVRHcHpRemxXTm5VbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0zNQ--";


class App extends Component {

  getForecast = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const state = e.target.elements.state.value;
    const api_call = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%2C%20${state}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
    
    const data = await api_call.json();

    console.log(data);
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getForecast={this.getForecast} />
        <Forecast />
      </div>
      
    );
  }
}

export default App;
