import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CharacterById = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvelbackmihoub.herokuapp.com/comics/character/${id}`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading === true ? (
        <h1>En cours de chargement!</h1>
      ) : (
        <>
          <div>test</div>
          {/* <div className="home">
            {data.results.map((item, index) => {
              console.log(item);
              // const pic = item.thumbnail.path + "." + item.thumbnail.extension;
              return (
                <div className="line">
                  <div>{item.name};</div>;{console.log(item.name)}
                </div>
              );
            })}
          </div> */}
        </>
      )}
    </div>
  );
};

export default CharacterById;
