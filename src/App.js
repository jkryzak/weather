import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends Component {

  state = {
    location: {},
    condition: {},
    forecast: [],
    hasError: false
  }

  addNewLocale = (weatherData) => {
    console.log(weatherData)

    if(weatherData.query.results === null){
      this.setState({
        hasError: true
      })
    } else {
      this.setState({
        location: weatherData.query.results.channel.location, 
        condition: weatherData.query.results.channel.item.condition,
        forecast: weatherData.query.results.channel.item.forecast,
        hasError: false
      });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Title />
        <Form onSubmit={this.addNewLocale}/>
        {this.state.hasError &&
          <div className="snuggle-warning">Something went wrong, please try again.</div>
        }
        {this.state.forecast.length > 0 && <Weather {...this.state}/>}
        {/* ↑ is a short cut for ↓ */}
        {/* <Weather location={this.state.location} condition={this.state.condition} forecast={this.state.forecast} hasError={this.state.hasError} />  */}
      </div>
    );
  }
}

export default App;
