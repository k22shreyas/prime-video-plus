import React from "react";
import PropTypes from "prop-types";

const RecommendedVideo = (props) => {
  return (
    <div className="card">
      <img
        src={props.video.thumbnailUrl}
        className="card-img-top"
        alt={props.video.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.video.title}</h5>
        <p className="card-text">{props.video.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.video.category}</li>
        <li className="list-group-item">{props.video.publishedOn}</li>
        <li className="list-group-item">
          <button className="btn btn-success btn-sm" onClick={props.onClick}>
            {/* conditional rendering inside JSX*/}
            {props.video.isInWatchlist ? "In watchlist" : " Add to watchlist"}
          </button>
          {props.video.isInWatchlist}
        </li>
      </ul>
    </div>
  );
};

RecommendedVideo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  publishedOn: PropTypes.string.isRequired,
};
 
export default RecommendedVideo;