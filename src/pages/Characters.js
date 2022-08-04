import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvelbackmihoub.herokuapp.com/characters"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }

      // console.log(response.data.results[0].name);
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
            {data.results.map((item, index) => {
              const pic = item.thumbnail.path + "." + item.thumbnail.extension;
              return (
                <Link to={`/comics/${item._id}`}>
                  {/* {console.log(item._id)} */}
                  <div className="line">
                    <div className="description">{item.name}</div>

                    <div className="description">{item.description}</div>

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

export default Characters;
