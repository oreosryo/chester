import React, { Component } from 'react';
import PlaceGrid2 from './PlaceGrid2';
import map from '../assets/chester-city-map.png';

class PlaceMap extends Component {
    render () {
        return (
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                <h1 className="grid-header">My Places</h1>
                <div className="map-container">
                    <img className="map" src={map} alt="Chester City Map"/>
                    <PlaceGrid2 />
                </div>
            </div>
        )
    }
}

export default PlaceMap;