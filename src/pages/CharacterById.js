import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CharacterById.scss";
import deadpool from "../assets/deadpool.jpeg";

const CharacterById = () => {
  const { characterId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvelbackmihoub.herokuapp.com/comics/${characterId}`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [characterId]);

  return (
    <div className="IdContainer">
      {isLoading === true ? (
        <h1>En cours de chargement!</h1>
      ) : (
        <>
          <h1 className="mainTitle"> Your champ is in those comics !</h1>
          <div className="mainCharactId">
            {data.comics.map((item, index) => {
              console.log(item);
              const pic = item.thumbnail.path + "." + item.thumbnail.extension;

              return (
                <>
                  <div className="charactId">
                    <div className="block">
                      <div className="itemTitle">{item.title}</div>
                      <div>{item.description}</div>

                      <div>
                        {pic.includes("image_not_available") ? (
                          <img className="blockPic" src={deadpool} alt="" />
                        ) : (
                          <img className="blockPic" src={pic} alt="" />
                        )}
                      </div>
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

export default CharacterById;
