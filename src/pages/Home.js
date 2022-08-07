import "./home.scss";
import { Link } from "react-router-dom";

const Home = ({ token }) => {
  return (
    <div className="home">
      <div className="comicSearch"></div>

      <div className="homeContainer">
        <h1>Comics Research !</h1>
        <Link className="comicsButton" to={token ? "/comics" : "/connect"}>
          <button className="comicsB">Comics</button>
        </Link>
      </div>
      <div className="characterSearch"></div>

      <div className="homeContainerB">
        <h1>Characters Research !</h1>
        <Link
          className="charactersButton"
          to={token ? "/characters" : "/connect"}
        >
          <button className="charactB">Characters</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
