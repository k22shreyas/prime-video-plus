/*import React, { useState } from 'react';
import RecommendedVideos from './RecommendedVideos';

const RecommendedVideo = () => {
  const [recommendedVideos, setRecommendedVideos] = useState([
    {
      id: 87654,
      title: "Man Vs Wild",
      description: "A Wild adventure show by Bear Grylls",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Infotainment",
      publishedOn: "2 days ago",
      isInWatchlist: false,
    },
    {
      id: 987654,
      title: "Planet Earth II",
      description: "A show hosted by David Attenborough on BBC Earth",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Infotainment",
      publishedOn: "3 days ago",
      isInWatchlist: false,
    },
    {
      id: 324534,
      title: "Formula 1 - Final",
      description:
        "Enjoy the final getaway of the year as Max Verstappen leads the field in Abu Dhabi",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Sports",
      publishedOn: "2 hours ago",
      isInWatchlist: false,
    },
    {
      id: 5467890,
      title: "Greatest goals in the Premier League",
      description:
        "Garnacho's third-minute wonder goal muted the protesting Everton supporters at Goodison Park.",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Sports",
      publishedOn: "5 hours ago",
      isInWatchlist: false,
    },
  ]);

  const handleManageWatchlist = (index) => {
    const updatedVideos = [...recommendedVideos];
    updatedVideos[index].isInWatchlist = !updatedVideos[index].isInWatchlist;
    setRecommendedVideos(updatedVideos);
  };

  return (
    <div>
      <h2>Recommended Videos List</h2>
      <RecommendedVideos
        recommendedVideos={recommendedVideos}
        onManageWatchlist={handleManageWatchlist}
      />
    </div>
  );
};

export default RecommendedVideo;*/

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
 
export default RecommendedVideo;