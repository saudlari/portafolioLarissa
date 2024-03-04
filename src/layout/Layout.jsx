import Footer from './Footer.jsx'
import Header from "./Header.jsx";
import { Outlet, Link } from "react-router-dom";

export default function Layout () {

  return (
    <>
      <nav class="w3-top">
        <div
          class="w3-row w3-padding w3-black"
          style={{ letterSpacing: "4px" }}
        >
          <Link class="w3-bar-item w3-button" to="/">
            Home
          </Link>
          <Link class="w3-bar-item w3-button" to="/reportajes">
            Reportajes
          </Link>
          <Link class="w3-bar-item w3-button" to="/infografias">
            Infografias
          </Link>
          <Link class="w3-bar-item w3-button" to="/about">
            About
          </Link>
          <Link class="w3-bar-item w3-button" to="/contact">
            Contact
          </Link>
        </div>
      </nav>

      <div>
        <Header class="w3-container" />
      </div>

      <div style={{"margin-top": "55px"}}>
        <Outlet />
      </div>

      <div class="w3-bar">
        <Footer />
      </div>
    </>
  );
};

