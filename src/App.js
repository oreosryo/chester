import React, { Component } from 'react';

/* modules */
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import PlaceMap from './components/map/PlaceMap'
import PlaceGrid from './components/grid/PlaceGrid';

/* styles */
import './css/App.css';

class App extends Component {

  render() {
    return(
      <div>
        <NavMenu />
        <Header /> 
        <PlaceMap />
        <PlaceGrid />
      </div>
    )
  }
}

export default App;