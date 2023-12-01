import React from "react";

const TrendingVideo = (props) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img
          src={props.thumbnailUrl}
          className="card-img-top"
          alt={props.title}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.category}</li>
          <li className="list-group-item">{props.publishedOn}</li>
        </ul>
      </div>
    </div>
  );
};

export default TrendingVideo;
