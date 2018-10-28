import React, { Component } from 'react';

/* modules */
import Modal from './Modal'
import ModalContent from './ModalContent';
import locationPin from '../assets/icons/location-pin.svg'

class GridItem extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        name: null, 
        imgUrl: null,
        content: null,
        coordinates: null,
        isOpen: false
      }
    }
  
    toggleModal = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  
    render () {
        let topCoordinate = this.props.coordinates[0] + '%';
        let leftCoordinate = this.props.coordinates[1] + '%';
        var gridPointStyle = {
            top: topCoordinate,
            left: leftCoordinate
        }
        
        return(
            // this is the squares in the grid that you see which have the names of the places
            <div className="grid-point" style={gridPointStyle} onClick={this.toggleModal}>
              <div className="grid-item">
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
              <div>
                <img className="location-pin" src={locationPin} alt="Location pin"/>
              </div>
            </div>
      )
    }
  }

  export default GridItem;