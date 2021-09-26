import React from "react";
import "./Favorite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";

const Favorite = (props) => {
  //listing the favorite person
  const worth = <FontAwesomeIcon icon={faHandHoldingUsd} />;
  //calculating the total worth of selected youtubers
  let sum = props.favorite.reduce((sum, curr) => {
    return sum + curr.netWorth;
  }, 0);

  //looping through all the youtubers and render each one at a time to the shortlist

  const favorite = props.favorite.map((techie) => {
    return (
      <div key={Math.random()} className="mini-card">
        <img src={techie.img} alt="person" />
        <h3>{techie.name}</h3>
      </div>
    );
  });

  return (
    <div>
      <h3 className="shortlist">Favorite Techies : {favorite.length}</h3>
      <div className="fav-person">{favorite}</div>
      <hr />
      <p className="sub-amount">
        <i>Total Worth : </i>
        <b>
          <span>{worth} </span>
          {sum.toFixed(2)}millions
        </b>
      </p>
    </div>
  );
};

export default Favorite;
