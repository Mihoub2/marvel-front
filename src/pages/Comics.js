import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./comics.scss";
import deadpool from "../assets/deadpool.jpeg";

const Comics = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://marvelbackmihoub.herokuapp.com/comics"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="backContainer">
      {isLoading === true ? (
        <h1>En cours de chargement!</h1>
      ) : (
        <>
          <div className="comicsContainer">
            {data.results.map((movie, index) => {
              const title = movie.title;

              const objTitle = { title };
              const arrTitle = Object.entries(objTitle);
              const pic =
                movie.thumbnail.path + "." + movie.thumbnail.extension;

              // console.log(arrTitle[0]);
              return (
                <Link className="link" to={`/character/${movie._id}`}>
                  <div className="line">
                    <div className="monvieTitle">
                      {arrTitle.includes("2009 Mini-Poster 6 (2009) #1") ? (
                        <button
                          onClick={() => {
                            <Link to={"/"}></Link>;
                          }}
                        >
                          <p>Deadpool Error!</p>
                        </button>
                      ) : (
                        <div className="movieTitle">{arrTitle.sort()}</div>
                      )}
                    </div>

                    {movie.description ? (
                      <div className="description">{movie.description}</div>
                    ) : (
                      "No description for this comics, but it may be awesome! Click for more informations !"
                    )}
                    <div className="comicsPic">
                      {" "}
                      {pic.includes("image_not_available") ? (
                        <img src={deadpool} alt="" />
                      ) : (
                        <img src={pic} alt="" />
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

export default Comics;
