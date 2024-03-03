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
          <Link class="w3-bar-item w3-button" to="/orders">
            Orders
          </Link>
          <Link class="w3-bar-item w3-button" to="/menus">
            Menus
          </Link>
          <Link class="w3-bar-item w3-button" to="/tables">
            Tables
          </Link>
          <Link class="w3-bar-item w3-button" to="/fakeData">
            Fake Data
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

      <div class="w3-content" style={{ width: "80%" }}>
        <Outlet />
      </div>

      <div class="w3-bar">
        <Footer />
      </div>
    </>
  );
};

