import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./comics.scss";
import deadpool from "../assets/deadpool.jpeg";
import Loader from "../components/Loader";

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

  return isLoading ? (
    <Loader />
  ) : (
    <div className="backContainer">
      (
      <>
        <div className="comicsContainer">
          {data.results.map((movie, index) => {
            const title = movie.title;
            console.log(title);

            const objTitle = { title };
            const arrTitle = Object.entries(objTitle);
            const pic = movie.thumbnail.path + "." + movie.thumbnail.extension;

            return (
              <Link className="link" to={`/character/${movie._id}`}>
                <div className="comicsLine">
                  <div className="upperNav">
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
                        <div className="movieTitle">{title}</div>
                      )}
                    </div>

                    {movie.description ? (
                      <div className="description">{movie.description}</div>
                    ) : (
                      "No description for this comics, but it may be awesome! Click for more informations !"
                    )}
                  </div>
                  <div className="bottomNav">
                    <div className="comicsPic">
                      {pic.includes("image_not_available") ? (
                        <img className="realcomicsPic" src={deadpool} alt="" />
                      ) : (
                        <img className="realcomicsPic" src={pic} alt="" />
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </>
      )
    </div>
  );
};

export default Comics;
