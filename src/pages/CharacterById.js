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
    const comicsData = async () => {
      const response = await axios.get(
        `https://marvelbackend-01.herokuapp.com/comics/${characterId}`
      );
      setData(response.data);
      setIsLoading(false);
      console.log(response.data);
    };

    comicsData();
  }, [characterId]);

  return (
    <div className="IdContainer">
      {isLoading === true ? (
        <h1>En cours de chargement!</h1>
      ) : (
        <>
          <div className="upperHero">
            {data.thumbnail.path +
            "." +
            data.thumbnail.extension.includes("image_not_available") ? (
              <img className="blockPic" src={deadpool} alt="" />
            ) : (
              <img
                className="blockPic"
                src={data.thumbnail.path + "." + data.thumbnail.extension}
                alt=""
              />
            )}
            <p className="heroDescription">
              {data.description ? data.description : "nothing about him!"}
            </p>
          </div>

          <div className="mainCharactId">
            {data.comics.map((item, index) => {
              console.log(item);
              const pic = item.thumbnail.path + "." + item.thumbnail.extension;

              return (
                <>
                  <div key={index} className="charactId">
                    <div className="block">
                      <div className="itemTitle">{item.title}</div>
                      <div>
                        {item.description
                          ? item.description
                          : "Nothing about this comic!"}
                      </div>

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
