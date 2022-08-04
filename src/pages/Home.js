import "./home.scss";
import marvel from "../assets/marvel.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="comicSearch"></div>

      <div className="homeContainer">
        <h1>Comics Research !</h1>
        <input className="homeInput" type="text" placeholder="find a comic!" />
      </div>
      <div className="characterSearch"></div>

      <div className="homeContainer">
        <h1>Characters Research !</h1>
        <input
          className="homeInput"
          type="text"
          placeholder="find a character!"
        />
      </div>
    </div>
  );
};

export default Home;
