import React from 'react';
import Iframe from './Iframe';



export default function InfogramSaid2021() {
    return (
      <>
      <div>
             <div className="w3-container w3-teal">
        <h1>Infografia Said 2021</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
       <Iframe link="https://e.infogram.com/d5ba509f-bcdb-48fe-8ea9-5967d24f1134?src=embed" title="Informe SAiD 2021" width="1000" height="15900"/>
       </div>
       </div>
    </>
  );
}