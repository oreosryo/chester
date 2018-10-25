import React, { Component } from 'react';
import './App.css';


class Header extends Component {
  render () {
    return(
      <div className="header">
        Chester, Cheshire
        <div className="subtitle"> 
          Through my eyes
        </div>
      </div>
    )
  }
}

class GridItem extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      name: null, 
      imgUrl: null,
      content: null
    }
  }

  render () {
    return(
      // this is the squares in the grid that you see which have the names of the places
      <div className="grid-item" onClick={() => alert("clicked")}>
        <img className="background" src={this.props.imgUrl} alt={this.props.name} />
        <div className="location">
          {this.props.name}
        </div>
        {/*}<div className="content">
          {this.props.content}--#
        </div>*/}
      </div>
    )
  }
}

class PlaceGrid extends Component {
  getData() {
    var data = [
      {
        "name": "Guilden Sutton",
        "imgUrl": require("./assets/guilden-sutton.png"),
        "content": "test data"
      },
      {
        "name": "Chester Cathedral",
        "imgUrl": require("./assets/chester-cathedral.jpg"),
        "content": "test data"
      }, 
      {
        "name": "City Centre",
        "imgUrl": require("./assets/chester-city-centre.png"),
        "content": "test data"
      }, 
      {
        "name": "Cheshire Oaks",
        "imgUrl": require("./assets/cheshire-oaks.jpeg"),
        "content": "test data"
      },
      {
        "name": "Chester City Baths",
        "imgUrl": require("./assets/atlantic-pool.jpg"),
        "content": "test data"
      }, 
      {
        "name": "Merton House",
        "imgUrl": require("./assets/merton-house.jpg"), 
        "content": "test data"
      }
    ];

    return data;
  }

  render () {
    let gridItems = [];
    let gridItemData = this.getData();

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
      <div className="grid">
        {gridItems}
      </div>
    )
  }
}

class App extends Component {

  render() {
    return(
      <div>
        <Header /> 
        <PlaceGrid /> 
      </div>
    )
  }
}

export default App;
