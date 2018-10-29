import React, { Component } from 'react';

/* modules */
import Modal from '../Modal';
import ModalContent from '../ModalContent';

class GridItem extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        name: null, 
        imgUrl: null,
        content: null,
        thingsToDo: null,
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
              content={this.props.content}
              thingsToDo={this.props.thingsToDo}>
            </ModalContent>
          </Modal>
        </div>
      )
    }
  }

  export default GridItem;