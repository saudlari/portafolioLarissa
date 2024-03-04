import CarouselComponent from "./Gallery";
import RacismoVecinalHome from "./RacismoVecinalHome";
import ReportajesGrid from "../Reportajes/Reportajes";


export default function Home (){


    return (
      <>
       <div style={{ marginBottom: '100px' }}></div> 
        <div class="w3-content">
          <h1 class="w3-center w3-text-grey">Fotografias</h1>
        </div>
      < CarouselComponent />

      <div style={{ marginBottom: '150px' }}></div> 

      <div class="w3-content">
          <h1 class="w3-center w3-text-grey">Infografias</h1>
        </div>

      <RacismoVecinalHome />

      <div style={{ marginBottom: '150px' }}></div> 

      <div class="w3-content">
          <h1 class="w3-center w3-text-grey">Reportajes</h1>
        </div>

      <ReportajesGrid style={{height: '100px'}} />


     
      </>
    );
}