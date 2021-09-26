import React, { useEffect, useState } from "react";
import SingleTechie from "../SingleTechie/SingleTechie";
import Favorite from "../Favorite/Favorite";
import "./Techies.css";

const Techies = () => {
  const [techies, setTechies] = useState([]);

  const [fav, setFav] = useState([]);

  //add to favorite event handler

  const handleFavorite = (techie) => {
    
    const newFav = [...fav, techie];
    setFav(newFav);
    console.log(newFav);
  };

  //loading data from local JSON file
  useEffect(() => {
    fetch("./techguys.json")
      .then((res) => res.json())
      .then((data) => setTechies(data));
  }, []);

  return (
    <div className="parent">
      <div className="techie-container">
        {techies.map((techie) => (
          <SingleTechie
            key={techie.channelName} //used channel name because 2 person may share 1 name but they can't share same channel name
            techie={techie}
            handleFavorite={() => handleFavorite(techie)}
          ></SingleTechie>
        ))}
      </div>
      <div>
        <Favorite favorite={fav}></Favorite>
      </div>
    </div>
  );
};

export default Techies;
