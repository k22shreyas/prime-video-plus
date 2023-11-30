/*import React from 'react';

const RecommendedVideosList = ({ recommendedVideos, onManageWatchlist }) => {
  const handleManageWatchlist = (index) => {
    onManageWatchlist(index);
  };

  if (recommendedVideos.length === 0) {
    return (
      <div className="alert alert-warning">
        Unable to suggest Recommended videos. Please watch more videos.
      </div>
    );
  }

  return (
    <div className="row">
      {recommendedVideos.map((video, index) => (
        <div className="col-md-3" key={video.id}>
          <div className="card">
            <img src={video.thumbnailUrl} className="card-img-top" alt={video.title} />
            <div className="card-body">
              <h5 className="card-title">{video.title}</h5>
              <p className="card-text">{video.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{video.category}</li>
              <li className="list-group-item">{video.publishedOn}</li>
              <li className="list-group-item">
                <button
                  className="btn btn-success btn-sm"
                  onClick={handleManageWatchlist.bind(this, index)}
                >
                  {video.isInWatchlist ? "In watch list" : "Add to watch list"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendedVideosList;*/

import { useState } from "react";
import RecommendVideo from "./RecommendVideo";
 
const RecommendVideoList = () => {
  // Let's have the comp wide updatable data
  const [recommendedVideos, setRecommendedVideos] = useState([
    {
      id: 765354657,
      title: "Top 50 Goals of Messi",
      description: "Watch and enjoy the top 50 goals of the Legendary Messi",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Sports",
      publishedOn: "2 months ago",
      isInWatchlist: false,
    },
    {
      id: 45657856768,
      title: "Why Ronaldo is the GOAT?",
      description: "Is he a human? Look at the goals he scored and decide",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Sports",
      publishedOn: "3 months ago",
      isInWatchlist: false,
    },
    {
      id: 67565654,
      title: "Big Factories of the World",
      description:
        "How the factories are producing stuff at large scale? watch it now",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Industries",
      publishedOn: "3 months ago",
      isInWatchlist: true,
    },
    {
      id: 979768632,
      title: "Super cars of 2023",
      description:
        "Electric cars are now taking over the old fashioned cars. Enjoy the Super cars show",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Auto",
      publishedOn: "3 months ago",
      isInWatchlist: false,
    },
  ]);
 
  if (recommendedVideos.length === 0) {
    return (
      <div className="alert alert-warning">
        Unable to suggest Recommended Videos. Please watch more videos.
      </div>
    );
  }
 
  const handleManageWatchlist = (index) => {
    console.log(index);
 
    const videos = [...recommendedVideos];
    videos[index].isInWatchlist = !videos[index].isInWatchlist;
    setRecommendedVideos(videos);
  };
 
  return (
    <div className="row">
      {recommendedVideos.map((video, index) => {
        return (
          <div className="col-md-3" key={index} >    
            <RecommendVideo
              video={video}
              onClick={handleManageWatchlist.bind(this, index)}
            />
          </div>
        );
      })}
    </div>
  );
};
 
export default RecommendVideoList;

