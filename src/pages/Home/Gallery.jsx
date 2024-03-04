import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CarouselComponent = () => {
  return (
    <>
    <Carousel autoPlay infiniteLoop interval={2000}>
      <div>
        <img src="/assets/amazonia1.jpg" alt="Amazonia 1" style={{ maxWidth: '1600px', maxHeight: '1600px' }}/> 
      </div>
      <div>
        <img src="/assets/amazonia3.jpg" alt="Amazonia 2" style={{ maxWidth: '1600px', maxHeight: '1600px' }}/>
      </div>
      <div>
        <img src="/assets/amazonia2.jpg" alt="Varieteta" style={{ maxWidth: '1600px', maxHeight: '1600px' }} />
      </div>

    </Carousel>
<div>
<a href="https://www.flickr.com/photos/larissaud/" className="w3-bar-item w3-button ver-mas-button" style={{backgroundColor: '#000000', color: '#ffffff', fontSize: '16px', padding: '8px 6px', border: 'none', borderRadius: '5px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', display: 'block', margin: 'auto'}} target="_blank" rel="noopener noreferrer">Ver más</a>
    </div>

</>
    
  );
};

export default CarouselComponent;