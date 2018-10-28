import React, { Component } from 'react';

import data from '../../Data';
import LocationItem from './LocationItem';

class LocationPoints extends Component {
    render () {
      let gridItems = [];
      let gridItemData = data;
  
      for (var i = 0; i < gridItemData.length; i++) {
        gridItems.push(
          <LocationItem 
            name={gridItemData[i].name} 
            imgUrl={gridItemData[i].imgUrl}
            content={gridItemData[i].content} 
            coordinates={gridItemData[i].coordinates}
            key={i}
          />);
      }
  
  
      return(
        <div className="place-grid2" id="my-places">
          <div className="grid">
            {gridItems}
          </div>
        </div>
      )
    }
  }

  export default LocationPoints;