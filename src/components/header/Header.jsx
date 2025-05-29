import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <img width="180" src={logo} alt="Logo" />
      </Link>
      <nav className="nav-links">
        <Link to="/trending" className="nav-button">Em Alta</Link>
        <Link to="/tvseries" className="nav-button">Séries de TV</Link>
        <Link to="/tvshows" className="nav-button">Shows de TV</Link>
      </nav>
      <SearchBar />
    </div>
  );
}

export default Header;
