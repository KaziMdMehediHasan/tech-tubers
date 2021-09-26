import React from "react";
import "./Favorite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";

const Favorite = (props) => {
  //listing the favorite person
  console.log(props.favorite);

  const worth = <FontAwesomeIcon icon={faHandHoldingUsd} />;
  let sum = props.favorite.reduce((sum, curr) => {
    return sum + curr.netWorth;
  }, 0);
  const favorite = props.favorite.map((techie) => {
    return (
      <div key={techie.name} className="mini-card">
        <img src={techie.img} alt="person" />
        <h3>{techie.name}</h3>
      </div>
    );
  });
  return (
    <div>
      <h3>Favorite List: {favorite.length}</h3>
      <div className="fav-person">{favorite}</div>
      <hr />
      <p className="sub-amount">
        <i>Total Worth : </i>
        <b>
          {sum.toFixed(2)}millions <span>{worth}</span>
        </b>
      </p>
    </div>
  );
};

export default Favorite;
