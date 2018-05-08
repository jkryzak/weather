import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Forecast from './components/Forecast';

class App extends Component {

  state = {
    temp: undefined,
    text: undefined,
    low: undefined,
    high: undefined,
    city: undefined,
    state: undefined,
    country: undefined
  }

  addNewLocale = (dataInfo) => {
    console.log(dataInfo)
    this.setState ({
      temp: dataInfo.query.results.channel.item.condition.temp, // assign 'temp' to be this path of the json that's returned
      text: dataInfo.query.results.channel.item.condition.text,
      code: dataInfo.query.results.channel.item.condition.code,
      low: dataInfo.query.results.channel.item.forecast[0].low,// assign 'low' to be this path of the json array that's returned, the 0th item in this case
      high: dataInfo.query.results.channel.item.forecast[0].high,
      city: dataInfo.query.results.channel.location.city,
      state: dataInfo.query.results.channel.location.region, // assign 'state' to be this path of the json that's returned -region
      country: dataInfo.query.results.channel.location.country
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <Title />
        <Form onSubmit={this.addNewLocale}/>
        <Forecast
          temp={this.state.temp}
          text={this.state.text}
          code={this.state.code}
          low={this.state.low}
          high={this.state.high}
          city={this.state.city}
          state={this.state.state}
        />
      </div>
    );
  }
}

export default App;
