import "./home.scss";
import marvel from "../assets/marvel.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="comicSearch"></div>

      <div className="homeContainer">
        <h1>Comics Research !</h1>
        <Link className="comicsButton" to="/comics">
          <button className="comicsB">Comics</button>{" "}
        </Link>
      </div>
      <div className="characterSearch"></div>

      <div className="homeContainer">
        <h1>Characters Research !</h1>
        <Link className="charactersButton" to="/characters">
          <button className="charactB">Characters</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
