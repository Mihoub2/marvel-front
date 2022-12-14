import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./characters.scss";
import deadpool from "../assets/deadpool.jpeg";
import Loader from "../components/Loader";

const Characters = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvelbackmihoub.herokuapp.com/characters?name=${input}`
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }

      // console.log(response.data.results[0].name);
      setIsLoading(false);
    };
    fetchData();
  }, [input]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="caracContainer">
      <>
        <div className="charactInput">
          <input
            className="realInput"
            type="text"
            placeholder="Search your champ!!"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </div>
        <div className="charactContainer">
          {data.results.map((item, index) => {
            const pic = item.thumbnail.path + "." + item.thumbnail.extension;
            return (
              <>
                <div key={index} className="characLine">
                  <div className="upperLine">
                    <Link className="linkcharac" to={`/character/${item._id}`}>
                      <div className="caractName">{item.name}</div>
                    </Link>
                    <a
                      className="linkcharac"
                      href="https://www.comicsblog.fr/images/news/crop2_deadpooloscartroll1.jpg"
                      // target="_blank"
                    >
                      {item.description ? (
                        <div className="caracDescription">
                          {item.description}
                        </div>
                      ) : (
                        <p>
                          {item.name} Has no description, but it may be awesome!
                          Click for more informations !"
                        </p>
                      )}
                    </a>
                  </div>

                  <div>
                    <Link to={`/character/${item._id}`}>
                      {pic.includes("image_not_available") ? (
                        <img className="realPic" src={deadpool} alt="" />
                      ) : (
                        <img className="realPic" src={pic} alt="" />
                      )}
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
      )}
    </div>
  );
};

export default Characters;
