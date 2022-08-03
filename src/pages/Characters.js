import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://marvelbackmihoub.herokuapp.com/characters"
      );
      setData(response.data);
      // console.log(response.data.results[0].name);
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
            {data.results.map((item, index) => {
              const pic = item.thumbnail.path + "." + item.thumbnail.extension;
              return (
                <Link to={`/character/${item._id}`}>
                  {/* {console.log(item._id)} */}
                  <div className="line">
                    {/* <div>{item.name};</div>; */}
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
