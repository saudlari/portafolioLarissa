

export default function About (){


    return (
      <>
           <div className="w3-content w3-container w3-padding-64" id="about">
      <h3 className="w3-center">ABOUT ME</h3>
      <p className="w3-center"><em>I love photography</em></p>
      <p>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div className="w3-row">
        <div className="w3-col m6 w3-center w3-padding-large">
          <p><b><i className="fa fa-user w3-margin-right"></i>My Name</b></p><br />
          <img src="https://media.licdn.com/dms/image/C4D03AQGOSB6yQn80Xg/profile-displayphoto-shrink_800_800/0/1595845233924?e=2147483647&v=beta&t=Sfxctq4_HOC-Wvn68k7J9kDYoiBs_ui242p5g__pePE" className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333" />
        </div>

        {/* Hide this text on small devices */}
        <div className="w3-col m6 w3-hide-small w3-padding-large">
          <p>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <p className="w3-large w3-center w3-padding-16">Im really good at:</p>
      <p className="w3-wide"><i className="fa fa-camera"></i>Photography</p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: '90%'}}>90%</div>
      </div>
      <p className="w3-wide"><i className="fa fa-laptop"></i>Web Design</p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: '85%'}}>85%</div>
      </div>
      <p className="w3-wide"><i className="fa fa-photo"></i>Photoshop</p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: '75%'}}>75%</div>
      </div>
    </div>
      </>
    );
}