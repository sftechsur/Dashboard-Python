import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    states: []
  };

  async componentDidMount() {
    const response = await fetch('/states');
    const body = await response.json();
    this.setState({states: body});
  }

  render() {
	const {states} = this.state;	
    return (
        <div className="App">
          <header className="App-header">
            <div className="App-intro">
              <h2>States</h2>
              {states.map(state =>
                  <div>
                    {state.name} {state.code} {state.amount}
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}

export default App;
