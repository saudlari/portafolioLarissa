import React from 'react';


export default function Iframe ({link, title, width, height}){
return(
  <>
 <iframe src={link} title={title} width={width} height={height} scrolling="no" frameBorder="0" style={{ border: 'none' }} allowFullScreen></iframe>
</>
);
}
