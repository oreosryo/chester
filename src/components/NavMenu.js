import React, { Component } from 'react';

/* styles */
import '../css/NavMenu.css';

class NavMenu extends Component {
    render() {
        return (
            <div className="nav-menu">
                <div className="menu-item"><a href="#about">About</a></div>
                <div className="menu-item"> - <a href="#meaning">What the City Means to Me</a></div>
                <div className="menu-item"><a href="#my-places">My Places</a></div>
            </div> 
        );
    }
}

export default NavMenu;