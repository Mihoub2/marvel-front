import logo from "../assets/logo.jpeg";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="rightButton">
        <Link className="favButton" to="/favorites">
          <button>Favorites</button>
        </Link>
        {token === null ? (
          <Link className="button" to="/signup">
            <button>S'inscrire</button>
          </Link>
        ) : (
          ""
        )}
        {token === null ? (
          <Link className="button" to="/connect">
            <button>Se connecter</button>
          </Link>
        ) : (
          ""
        )}
      </div>
      {token !== null ? (
        <div className="disconnected">
          <button
            className="deco"
            onClick={() => {
              setUser(null);
              navigate("/");
            }}
          >
            Se déconnecter
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
