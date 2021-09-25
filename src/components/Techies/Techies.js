import React, { useEffect, useState } from "react";
import SingleTechie from "../SingleTechie/SingleTechie";
import Favorite from "../Favorite/Favorite";
import "./Techies.css";

const Techies = () => {
  const [techies, setTechies] = useState([]);
  useEffect(() => {
    fetch("./techguys.json")
      .then((res) => res.json())
      .then((data) => setTechies(data));
  }, []);
  return (
    <div className="parent">
      <div className="techie-container">
        {techies.map((techie) => (
          <SingleTechie techie={techie}></SingleTechie>
        ))}
      </div>
      <div>
        <Favorite></Favorite>
      </div>
    </div>
  );
};

export default Techies;
