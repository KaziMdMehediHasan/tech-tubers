import React from "react";
import "./SingleTechie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHandHoldingUsd,
  faUsers,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const SingleTechie = (props) => {
  //icons
  const fav = <FontAwesomeIcon icon={faHeart} />;
  const subs = <FontAwesomeIcon icon={faUsers} />;
  const worth = <FontAwesomeIcon icon={faHandHoldingUsd} />;
  const youtube = <FontAwesomeIcon icon={faPlay} />;

  //destructuring properties

  const { name, img, channelName, age, netWorth, subscribers, country, link } =
    props.techie;

  return (
    <div className="parent-container">
      <div className="card-container">
        <div className="img-container">
          <img src={img} alt="DP" />
        </div>
        <div className="info-container">
          <h3>{name}</h3>
          <p>
            <i>Age : </i>
            <strong>{age}</strong>
          </p>
          <p>
            <i>Country : </i>
            <strong>{country}</strong>
          </p>
          <p>
            <i>Channel : </i>
            <strong>{channelName}</strong>
          </p>
          <p>
            <i>Subscribers : </i>
            <strong>
              {subscribers}millions <span className="sub">{subs}</span>
            </strong>
          </p>
          <p>
            <i>Net Worth : </i>
            <strong>
              {netWorth}millions <span className="worth">{worth}</span>
            </strong>
          </p>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn-fav" onClick={props.handleFavorite}>
          {fav}Add to Favorites
        </button>
        <button className="btn-yt">
          <b>
            <a href={link}>YouTube {youtube}</a>
          </b>
        </button>
      </div>
    </div>
  );
};

export default SingleTechie;
