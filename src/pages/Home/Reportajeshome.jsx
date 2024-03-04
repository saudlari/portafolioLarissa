import React from 'react';
import { Link } from 'react-router-dom';

export default function ReportajesGrid() {
  return (
    <div>
      <div className="w3-row-padding w3-padding-16 w3-center" id="food">
        <div className="w3-quarter">
          <img src="/assets/memealmito.png" alt="meme de bolsonaro" style={{width: "100%"}} />
          <h3><Link target='_blank' to="https://www.academia.edu/38573671/Del_meme_al_mito_la_trayectoria_medi%C3%A1tica_de_Bolsonaro">La trayectoria mediática de Bolsonaro</Link></h3>
          <p>Las elecciones de Brasil fueron en octubre de 2018 y el Jair Bolsonaro fué elegido como nuevo presidente, después de una serie de escándalos incluyendo corrupción, crisis políticas, económicas y manipulación mediática. Las fakenews y la desinformación dieron el tono de toda la campaña. Los motivos por los que Bolsonaro fuera elegido son variados y llenos de hipótesis y análisis. Abordaremos algunas de ellas en este informe que busca contar la trayectoria mediática de Bolsonaro e intenta entender/explicar como una figura considerada caricaturesca, anticuada, se tornó meme, luego “mito” (como es llamado por sus seguidores) y ahora presidente de una gran potencia de Latino América. </p>
        </div>
        <div className="w3-quarter">
          <img src="/assets/archidona.png" alt="penitenciaria archidona" style={{width: "100%"}} />
          <h3><Link target='_blank' to="https://www.elsaltodiario.com/cie/archidona-estado-de-excepcion-permanente">Archidona, estado de excepción permanente </Link></h3>
          <p>El 19 de noviembre, el Frontex detectó la salida de 44 pateras desde las costas de Argelia. Un dispositivo conformado por una fragata del Ejército, un barco de Salvamento Marítimo, dos helicópteros y dos aviones interceptó estas embarcaciones, con un total de 476 personas a bordo. El delegado del Gobierno en Murcia, Francisco Bernabé, calificó esta llegada como “un ataque coordinado contra nuestras fronteras y, por tanto, contra las fronteras de la Unión Europea”. </p>
        </div>
        <div className="w3-quarter">
          <img src="/assets/miradainvertida.png" alt="colectivo mirada invertida" style={{width: "100%"}} />
          <h3><Link target='_blank' to="https://www.elsaltodiario.com/pista-de-aterrizaje/aqui-la-mayoria-de-las-trabajadoras-del-hogar-no-tienen-derecho-a-paro">“Aquí la mayoría de las trabajadoras del hogar no tienen derecho a paro” </Link></h3>
          <p>Hablamos con Leonor Jiménez y Montserrat Clos, del Colectivo La Mirada Invertida, sobre su proyecto 'Boconas' y sobre el trabajo doméstico en España y Bolivia.</p>
        </div>
        <div className="w3-quarter">
          <img src="/assets/recortes.png" alt="incendio museu Brasil" style={{width: "100%"}} />
          <h3><Link target='_blank' to="https://www.elsaltodiario.com/brasil/incendio-museo-nacional-rio-janeiro">Tus recortes han quemado mi museo</Link></h3>
          <p>La noche del domingo 2 de septiembre, un incendio de grandes proporciones dejó prácticamente destruido el Museo Nacional de Brasil y borró para siempre un importante patrimonio artístico y científico de más de 20 millones de piezas y documentos. El fuego acabó con colecciones de importancia internacional, como la de paleontología con huesos de animales prehistóricos, la de arte indígena y la colección egipcia. Entre las piezas también estaba el cráneo de ‘Luzía’, la mujer más antigua de las Américas, con más de 12.000 años.</p>
        </div>
      </div>
      
      {/* Second Photo Grid*/}
      <div className="w3-row-padding w3-padding-16 w3-center">
        <div className="w3-quarter">
          <img src="/assets/sostenible.png" alt="arquitectos sin fronteras" style={{width: "100%"}} />
          <h3><Link target='_blank' to="https://www.elsaltodiario.com/especulacion/isabel-martin-eva-morales-ciudad-sostenible-existe-centro-urbanismo-gentrificacion">'La ciudad sostenible ya existe, es el centro de tu ciudad”</Link></h3>
          <p>Isabel Martín Ruiz y Eva Morales Soler son dos de las tres componentes de Cotidiana, una cooperativa de arquitectas ubicada en Sevilla. Cada una de ellas lleva con sus bagajes, edades, experiencias y trayectorias profesionales distintas, pero juntas tienen el objetivo de crear redes y proyectos de arquitectura comunes que tengan en cuenta a las personas, los cuidados y el cotidiano, el ecosistema y el medio ambiente. Desde el sur y en femenino construyen otras maneras de entender y habitar la ciudad, yendo de lo más íntimo a lo común. </p>
        </div>

  );
}
