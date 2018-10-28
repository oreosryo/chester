import React, { Component } from 'react';
import Modal from './Modal';
import data from './Data';
import Merton from './assets/merton.jpg';
import wall from './assets/wall.png';
import amphi from './assets/amphi.jpg';
import castle from './assets/castle.jpg';
import river from './assets/river-dee.jpg';
import './css/App.css';


class Header extends Component {
  render () {
    return(
      <div className="header-area">
        <div className="main-header">
          Chester, Cheshire
          <div className="subtitle"> 
            Through my eyes
          </div>
        </div>
        <div className="description">
          Chester is a beautiful city on the River Dee in the north-west of England, U.K. 
          The city was originally the Roman fort <a href="https://en.wikipedia.org/wiki/Deva_Victrix" rel="noopener noreferrer" target="_blank">Deva Victrix</a> and later became a settlement. It has a well-preserved wall surrounding the city centre, 
          a Roman amphitheater as well as its own castle close to the border of Wales. 
          <br/>
          <div className="description-images">
              <img src={river} alt="River Dee"/>
              <img src={wall} alt="Chester City Wall at Sunset"/>
              <img src={amphi} alt="Chester City Amphitheatre"/>
              <img src={castle} alt="Chester Castle"/>
            </div>
          <div className="sub-section">
            <h1>What this city means to me</h1>
            I lived here for 3 years (2001-2004). It was filled with lots of travel, life-changing experiences and fond memories. The city has a vibrant history which you can see yourself through all the Roman, Tudor and Victorian architecture. 
            <div className="description-images">
              <img src={Merton} alt="Merton House Class"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class ModalContent extends Component {
  render() {
    return (
      <div className="modal-content">
        <div className="image-container">
          <img src={this.props.imgUrl} alt={this.props.name} /> 
        </div>
          <div className="header">
            <span className="header-name">{this.props.name}</span> 
          </div>
          <div className="description">
            {this.props.content}
        </div>
      </div>
    );
  }
}

class GridItem extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      name: null, 
      imgUrl: null,
      content: null,
      isOpen: false
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return(
      // this is the squares in the grid that you see which have the names of the places
      <div className="grid-item" onClick={this.toggleModal}>
        <img className="background" src={this.props.imgUrl} alt={this.props.name} />
        <div className="location">
          {this.props.name}
        </div>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <ModalContent 
            name={this.props.name} 
            imgUrl={this.props.imgUrl} 
            content={this.props.content}>
          </ModalContent>
        </Modal>
      </div>
    )
  }
}

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
        <h1 className="grid-header">My Places</h1>
        <div className="grid">
          {gridItems}
        </div>
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