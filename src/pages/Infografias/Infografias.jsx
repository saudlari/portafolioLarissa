
import { useParams } from "react-router-dom";
import InfogramSaid2022 from "./InfogramSaid2022";

function Sidebar() {
  return (
    <div className="w3-sidebar w3-light-grey w3-bar-block" style={{ width: '10%' }}>
      <h3 className="w3-bar-item">Infografias</h3>
      <a href="#" className="w3-bar-item w3-button">Racismo Vecinal</a>
      <a href="#" className="w3-bar-item w3-button">Infografia Said 2022</a>
      <a href="#" className="w3-bar-item w3-button">Ambitos del Racismo</a>
      <a href="#" className="w3-bar-item w3-button">Infografia Said 2021</a>
      <a href="#" className="w3-bar-item w3-button">Migración y discurso político</a>
    </div>
  );
}

function PageContent() {
  return (
    <div style={{ marginLeft: '10%' }}>
      <div className="w3-container w3-teal">
        <h1>Infografias</h1>
      </div>
      <img src="img_car.jpg" alt="Car" style={{ width: '100%' }} />
      <div className="w3-container">
        <h2>Sidebar Navigation Example</h2>
        <p>The sidebar with is set with "style="width:25%".</p>
        <p>The left margin of the page content is set to the same value.</p>
        <InfogramSaid2022 />
      </div>
    </div>
  );
}


export default function Infografias() {
  const { id } = useParams ();
  return (
    <>

      <Sidebar />
      <PageContent />
 </>
  );
}