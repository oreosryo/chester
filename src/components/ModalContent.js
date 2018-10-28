import React, { Component } from 'react';

/* styles */ 
import '../css/ModalContent.css';

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

  export default ModalContent;