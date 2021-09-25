import React from "react";
import "./SingleTechie.css";

const SingleTechie = (props) => {
  console.log(props);
  const { name, img, channelName, age, netWorth, subscribers, country } =
    props.techie;
  return (
    <div>
      <div className="card-container">
        <div className="img-container">
          <img src={img} alt="DP" />
        </div>
        <div className="info-container">
          <h4>Name :{name}</h4>
          <h5>
            Age : <strong>{age}</strong>
          </h5>
          <h5>Country : {country}</h5>
          <h5>Channel Name : {channelName}</h5>
          <h5>Subscribers : {subscribers}millions</h5>
          <h5>Net Worth : {netWorth}millions</h5>
        </div>
      </div>
      <div className="btn-container">
        <button>Add to Favorites</button>
        <button>Check Out the YT Channel</button>
      </div>
    </div>
  );
};

export default SingleTechie;
