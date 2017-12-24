import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const CookieCounter = ({numCookies = 0}) => {
  return (
    <h3>
      We have {numCookies} {numCookies === 1 ? 'cookie':'cookies'}
    </h3>
  );
}

const Greeting = (props) => {
  return (
    <h1>Hello {props.club}</h1>
  );
}

class AddRemoveCookie extends Component {
  render() {
    const { onCookieUpdate, numCookies } = this.props;
    return (
      <div>
        <button onClick={() => onCookieUpdate(numCookies + 1)} >
          Add Cookie
        </button>
        <button onClick={() => onCookieUpdate(numCookies - 1)}>
          Eat Cookie
        </button>
      </div>
    );
  }
}
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      time: new Date()
    });
  }
  render() {
    return (
      <h2>{this.state.time.toLocaleTimeString()}</h2>
    ); 
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numCookies: 1
    };
    this.handleCookieUpdate = this.handleCookieUpdate.bind(this);
  }
  handleCookieUpdate(numCookies) {
    this.setState({
      numCookies
    });
  }
  render() {
    const numCookies = this.state.numCookies;
    return (
      <div className="container">
        <Greeting club="Accelerate" />
        <CookieCounter numCookies={numCookies} />
        <AddRemoveCookie 
          numCookies={numCookies}
          onCookieUpdate={this.handleCookieUpdate}
        />
        <Timer />      
    </div>
    );
  }
}

export default App;
