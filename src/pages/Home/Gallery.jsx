import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={2000}>
      <div>
        <img src="/assets/amazonia1.jpg" alt="Amazonia 1" style={{ maxWidth: '1600px', maxHeight: '1600px' }}/> 
        <p className="legend">Amazonia 1</p> 
      </div>
      <div>
        <img src="/assets/amazonia3.jpg" alt="Amazonia 2" style={{ maxWidth: '1600px', maxHeight: '1600px' }}/>
        <p className="legend">Amazonia 2</p> 
      </div>
      <div>
        <img src="/assets/amazonia2.jpg" alt="Varieteta" style={{ maxWidth: '1600px', maxHeight: '1600px' }} /> 
        <p className="legend">Varieteta 1</p> 
      </div>
    </Carousel>
  );
};

export default CarouselComponent;