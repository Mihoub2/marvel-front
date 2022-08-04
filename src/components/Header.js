import logo from "../assets/logo.jpeg";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="rightButton">
        <Link className="favButton" to="/favorites">
          <button>Favorites</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
