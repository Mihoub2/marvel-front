import logo from "../assets/logo.jpeg";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <Link className="headerPic" to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="allButton">
        <div className="rightButton">
          {token === null ? (
            <Link className="button" to="/signup">
              <button className="headerButton">SingUp!</button>
            </Link>
          ) : (
            ""
          )}
          {token === null ? (
            <Link className="button" to="/connect">
              <button className="headerButton">Connect!</button>
            </Link>
          ) : (
            ""
          )}
        </div>
        {token !== null ? (
          <div className="ifConnected">
            <Link className="button" to="/comics">
              <button className="headerButton">Comics</button>
            </Link>
            <Link className="button" to="/characters">
              <button className="">Characters</button>
            </Link>
            <button
              className="buttonDeco"
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
    </div>
  );
};

export default Header;
