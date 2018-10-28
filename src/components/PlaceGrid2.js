import React, { Component } from 'react';

import data from '../Data';
import GridItem from './GridItem';

class PlaceGrid2 extends Component {
    render () {
      let gridItems = [];
      let gridItemData = data;
  
      for (var i = 0; i < gridItemData.length; i++) {
        gridItems.push(
          <GridItem 
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

  export default PlaceGrid2;