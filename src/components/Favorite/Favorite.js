import React from "react";
import "./Favorite.css";
const Favorite = (props) => {
  //listing the favorite person
  console.log(props.favorite);

  let sum = props.favorite.reduce((sum, curr) => {
    return sum + curr.subscribers;
  }, 0);
  const favorite = props.favorite.map((techie) => {
    return (
      <div className="mini-card">
        <img src={techie.img} alt="person" />
        <h3>{techie.name}</h3>
      </div>
    );
  });
  return (
    <div>
      <h3>Favorite List: {favorite.length}</h3>
      <div>{favorite}</div>
      <hr />
      <p className="sub-amount">
        <i>
          <b>Total Subscribers : </b>
        </i>
        <b>{sum.toFixed(2)}millions</b>
      </p>
    </div>
  );
};

export default Favorite;
