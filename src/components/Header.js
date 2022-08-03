import logo from "../assets/logo.jpeg";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = ({}) => {
  return (
    <div className="Header">
      <div className="leftButton">
        <Link className="comicsButton" to="/comics">
          <button className="comicsB">Comics</button>{" "}
        </Link>
        <Link className="charactersButton" to="/characters">
          <button className="charactB">Characters</button>{" "}
        </Link>
      </div>
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
