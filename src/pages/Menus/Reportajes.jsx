import React from 'react';

function PhotoGridItem(props) {
  return (
    <div className="w3-third w3-container w3-margin-bottom">
      <img src={props.imageSrc} alt="Norway" style={{ width: '100%' }} className="w3-hover-opacity" />
      <div className="w3-container w3-white">
        <p><b>{props.title}</b></p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

function PhotoGrid() {
  return (
    <div className="w3-row-padding">
      <PhotoGridItem
        imageSrc="/w3images/mountains.jpg"
        title="Lorem Ipsum"
        description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
      />
      <PhotoGridItem
        imageSrc="/w3images/lights.jpg"
        title="Lorem Ipsum"
        description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
      />
      <PhotoGridItem
        imageSrc="/w3images/nature.jpg"
        title="Lorem Ipsum"
        description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
      />
    </div>
  );
}

function Pagination() {
  return (
    <div className="w3-center w3-padding-32">
      <div className="w3-bar">
        <a href="#" className="w3-bar-item w3-button w3-hover-black">«</a>
        <a href="#" className="w3-bar-item w3-black w3-button">1</a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">2</a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">3</a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">4</a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">»</a>
      </div>
    </div>
  );
}

function Main() {
  return (
    <>
      <PhotoGrid />
      <Pagination />
    </>
  );
}

export default Main;