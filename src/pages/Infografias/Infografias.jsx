
import { useParams, Link } from "react-router-dom";
import InfogramSaid2022 from "./InfogramSaid2022";
import InfogramSaid2021 from "./InfogramSaid2021";
import RacismoVecinal from "./RacismoVecinal";
import AmbitosRacismo from "./AmbitosRacismo";
import Migracion from "./Migracion";

function Sidebar() {
  return (
    <div className="w3-sidebar w3-light-grey w3-bar-block" style={{ width: '20%' }}>
      <h3 className="w3-bar-item">Infografias</h3>
      <Link to="/infografias/racismo-vecinal" className="w3-bar-item w3-button">Racismo Vecinal</Link>
      <Link to="/infografias/said2022" className="w3-bar-item w3-button">Infografia Said 2022</Link>
      <Link to="/infografias/ambitosracismo" className="w3-bar-item w3-button">Ambitos del Racismo</Link>
      <Link to="/infografias/said2021" className="w3-bar-item w3-button">Infografia Said 2021</Link>
      <Link to="/infografias/migracion" className="w3-bar-item w3-button">Migración y discurso político</Link>
    </div>


  );
}

function PageContent({ selectedInfographic }) {
  const { id } = useParams ();
  console.log(id)
  return (
    <div style={{ marginLeft: '20%' }}>

      <div className="w3-container">
        {id === 'said2021' && <InfogramSaid2021 />}
        {id === 'said2022' && <InfogramSaid2022 />}
        {id === 'racismo-vecinal' && <RacismoVecinal />}
        {id === 'ambitosracismo' && <AmbitosRacismo />}
        {id === 'migracion' && <Migracion />}
        {id === undefined && <RacismoVecinal /> }


      </div>
    </div>
  );
}


export default function Infografias() {

  return (
    <>

   <Sidebar  />
   <PageContent  />
 </>
  );
}