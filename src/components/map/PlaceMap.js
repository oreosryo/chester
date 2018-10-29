import React, { Component } from 'react';
import LocationPoints from './LocationPoints';
import map from '../../assets/chester-city-map.png';

/* styles */
import '../../css/Map.css';

class PlaceMap extends Component {
    render () {
        return (
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                <h1 className="grid-header" id="my-places">My Places</h1>
                <div className="map-container">
                    Hover over the points on the map to see more details.
                    <br/><br/>
                    <img className="map" src={map} alt="Chester City Map"/>
                    <LocationPoints />
                </div>
            </div>
        )
    }
}

export default PlaceMap;