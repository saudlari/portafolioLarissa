import React from 'react';
import Iframe from './Iframe';


export default function Migracion() {
    return (
      <>
     <div>
      <div className="w3-container w3-teal">
        <h1>Migración y Discurso Político</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
       <Iframe link="https://e.infogram.com/4438b320-3ffa-4367-a7d6-67237184f5d5?src=embed" title="Inmigración y discursos politicos" width="1000" height="6422"/>
       </div>
       </div>
    </>
  );
}