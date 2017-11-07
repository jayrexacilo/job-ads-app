import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import Jobs from './Components/Jobs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Jobs />
      </div>
    );
  }
}

export default App;
