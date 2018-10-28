import React from 'react';
import PropTypes from 'prop-types';

/* styles */


class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
      zIndex: 100
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 800,
      margin: '60px auto',
      textAlign: 'left', 
      overflow: 'hidden',
      zIndex: 101
    };

    // close button 
    const closeStyle = {
      float: 'right', 
      padding: '8px',
      lineHeight: '8px'
    }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
        <div className="close" style={closeStyle}>
          x
        </div>
          {this.props.children}

          {/*<div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
    </div>*/}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;