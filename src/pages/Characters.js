import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./characters.scss";
import deadpool from "../assets/deadpool.jpeg";

const Characters = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvelbackmihoub.herokuapp.com/characters?name=${input}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }

      // console.log(response.data.results[0].name);
      setIsLoading(false);
    };
    fetchData();
  }, [input]);

  return (
    <div className="caracContainer">
      {isLoading === true ? (
        <h1>En cours de chargement!</h1>
      ) : (
        <>
          <div>
            <input
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
                <Link className="linkcharac" to={`/comics/${item._id}`}>
                  <div className="characLine">
                    <div className="caractName">{item.name}</div>

                    {item.description ? (
                      <div className="caracDescription">{item.description}</div>
                    ) : (
                      "No description for this superHero, but it may be awesome! Click for more informations !"
                    )}

                    <div className="charactPic">
                      {pic.includes("image_not_available") ? (
                        <img className="realPic" src={deadpool} alt="" />
                      ) : (
                        <img className="realPic" src={pic} alt="" />
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Characters;
