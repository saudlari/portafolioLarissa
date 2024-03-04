

export default function About (){


    return (
      <>
           <div className="w3-content w3-container w3-padding-64" id="about">
      <h3 className="w3-center">ABOUT ME</h3>
      <p className="w3-center"><em>Larissa Saud</em></p>
      <p className="w3-center"><em>¡Hola! Mi nombre es Larissa, y me apasiona contar historias de manera visual.</em></p>
      <div className="w3-row">
        <div className="w3-col m6 w3-center w3-padding-large">
          <p><b><i className="fa fa-user w3-margin-right"></i>My Name</b></p><br />
          <img src="https://media.licdn.com/dms/image/C4D03AQGOSB6yQn80Xg/profile-displayphoto-shrink_800_800/0/1595845233924?e=2147483647&v=beta&t=Sfxctq4_HOC-Wvn68k7J9kDYoiBs_ui242p5g__pePE" className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333" />
        </div>

        {/* Hide this text on small devices */}
        <div className="w3-col m6 w3-hide-small w3-padding-large">
          <p>Descubrí mi pasión por las imágenes a los 13 años, cuando mi madre me regaló una cámara Olympus de carrete. Desde entonces, he explorado diversos estilos fotográficos, pero me he centrado especialmente en el fotoperiodismo debido a mi profunda curiosidad por el mundo que me rodea y mi deseo innato de contar las historias que encuentro. He tenido el privilegio de trabajar en medios de comunicación tanto en Brasil como en España, donde he investigado, entrevistado y escrito sobre noticias locales y reportajes de investigación.

Mi interés por el periodismo y la fotografía me llevó a realizar un máster en la Universidad Oberta de Catalunya en "Comunicación Digital: Datos y Nuevas Narrativas". Durante este máster, comencé a explorar el mundo de las infografías interactivas, que combinan mis tres pasiones: periodismo, datos y diseño, para contar historias de manera visualmente atractiva. Me encanta experimentar con diferentes herramientas y técnicas para dar vida a las historias y hacer que la información sea accesible y emocionante.

En la actualidad, me considero una narradora visual que encuentra significado en la creación de contenido que informa, inspira y conecta con las personas. ¡Espero tener la oportunidad de colaborar contigo y contar tu historia de una manera única!</p>
        </div>
      </div>
      <p className="w3-large w3-center w3-padding-16">Soy realmente buena en:</p>
      <p className="w3-wide"><i className="fa fa-camera"></i>Fotografia</p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: '90%'}}>90%</div>
      </div>
      <p className="w3-wide"><i className="fa fa-laptop"></i>Diseño gráfico</p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: '85%'}}>85%</div>
      </div>
      <p className="w3-wide"><i className="fa fa-photo"></i>Edición de imágenes</p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: '80%'}}>80%</div>
        </div>
      <p className="w3-wide"><i className="fa fa-photo"></i>Infografias Interactivas</p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: '75%'}}>75%</div>
      </div>
      <p className="w3-wide"><i className="fa fa-photo"></i>Narrativa 360: El storytelling y la realidad virtual </p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: '80%'}}>80%</div>
      </div>
    </div>
      </>
    );
}