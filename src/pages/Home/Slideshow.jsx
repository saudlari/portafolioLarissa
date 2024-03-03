import React, { useState } from 'react';
//import AmbitosRAcismo from './assets/AmbitosRAcismo.'

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);

  function currentDiv(n) {
    setSlideIndex(n);
  }

  return (
    <div className="w3-container">
      <h2>Slideshow Indicators</h2>
      <p>Infografias</p>
      <div className="w3-content" style={{maxWidth: '1200px'}}>
        <img className="mySlides" src="/assets/racismo_vecinal.png" style={{width: '100%', display: slideIndex === 1 ? 'block' : 'none'}} />
        <img className="mySlides" src="img_snow_wide.jpg" style={{width: '100%', display: slideIndex === 2 ? 'block' : 'none'}} />
        <img className="mySlides" src="img_mountains_wide.jpg" style={{width: '100%', display: slideIndex === 3 ? 'block' : 'none'}} />

        <div className="w3-row-padding w3-section">
          <div className="w3-col s4">
            <img className="demo w3-opacity w3-hover-opacity-off" src="img_nature_wide.jpg" style={{width: '100%', cursor: 'pointer'}} onClick={() => currentDiv(1)} />
          </div>
          <div className="w3-col s4">
            <img className="demo w3-opacity w3-hover-opacity-off" src="img_snow_wide.jpg" style={{width: '100%', cursor: 'pointer'}} onClick={() => currentDiv(2)} />
          </div>
          <div className="w3-col s4">
            <img className="demo w3-opacity w3-hover-opacity-off" src="img_mountains_wide.jpg" style={{width: '100%', cursor: 'pointer'}} onClick={() => currentDiv(3)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;