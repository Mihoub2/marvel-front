import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Comics = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://marvelbackmihoub.herokuapp.com/comics"
      );
      setData(response.data);
      console.log(response.data.results[0].name);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading === true ? (
        <h1>En cours de chargement!</h1>
      ) : (
        <>
          <div className="home">
            {data.results.map((movie, index) => {
              const pic =
                movie.thumbnail.path + "." + movie.thumbnail.extension;
              return (
                <Link to={`/character/${movie._id}`}>
                  <div className="line">
                    {/* <div>{movie.name};</div>; */}

                    <img className="jules" src={pic} alt="" />
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
