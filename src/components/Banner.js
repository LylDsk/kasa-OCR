import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.png";
import "../styles/Banner.css";

function Banner() {
  return (
    <div className="kasa-banner">
      <img src={logo} alt="Kasa" className="kasa-logo" />
      <div className="kasa-menu">
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}
        >
          <p href="" className="kasa-option">
            Accueil
          </p>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}
        >
          <p className="kasa-option">A Propos</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Banner;
