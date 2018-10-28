import React, { Component } from 'react';

/* modules */
import Header from './components/Header';
import Modal from './components/Modal';
import NavMenu from './components/NavMenu';
import PlaceMap from './components/PlaceMap'

/* data */
import data from './Data';

/* styles */
import './css/App.css';

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
      <div className="place-grid" id="my-places">
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
        <NavMenu />
        <Header /> 
        <PlaceMap />
        <PlaceGrid />
      </div>
    )
  }
}

export default App;