import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';



const fadeImages = [
    '../../images/slide_5.jpg',
    '../../images/slide_6.jpg',
    '../../images/slide_7.jpg'
  ];
   
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true
  }
   
  const Slideshow = () => {
    return (
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    )
  }

  export default Slideshow; 