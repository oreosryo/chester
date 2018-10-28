import React, { Component } from 'react';

/* images */
import Merton from '../assets/merton.jpg';
import wall from '../assets/wall.png';
import amphi from '../assets/amphi.jpg';
import castle from '../assets/castle.jpg';
import river from '../assets/river-dee.jpg';

class Header extends Component {
    render () {
      return(
        <div className="header-area" id="about">
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
            <div className="sub-section" id="meaning">
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

  export default Header;