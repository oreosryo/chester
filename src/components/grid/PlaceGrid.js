import React, { Component } from 'react';

/* modules */ 
import data from '../../Data';
import GridItem from './GridItem';

class PlaceGrid extends Component {
    render () {
      let gridItems = [];
      let gridItemData = data;
  
      for (var i = 0; i < gridItemData.length; i++) {
        gridItems.push(
          <GridItem 
            name={gridItemData[i].name} 
            imgUrl={gridItemData[i].imgUrl}
            content={gridItemData[i].content} 
            key={i}
          />);
      }
  
  
      return(
        <div className="place-grid">
          <div className="grid">
            {gridItems}
          </div>
        </div>
      )
    }
  }

  export default PlaceGrid;