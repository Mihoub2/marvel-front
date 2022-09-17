import "./home.scss";
import { Link } from "react-router-dom";

const Home = ({ token, setUser }) => {
  console.log(token);
  return (
    <div className="home">
      <div className="middleButton">
        <div className="">
          <h1 className="title">Comics Research !</h1>

          <Link className="" to={token ? "/comics" : "/connect"}>
            <button className="">Comics</button>
          </Link>
        </div>
        <div className="">
          <h1 className="title">Characters Research !</h1>
          <Link className="" to={token ? "/characters" : "/connect"}>
            <button className="">Characters</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
