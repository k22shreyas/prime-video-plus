import {useState} from 'react'

const RecommendedVideos = () => {
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
      const videos = [
        ...recommendedVideos
      ]
      videos[index].isInWatchlist = !videos[index].isInWatchlist; 
      setRecommendedVideos(videos);
  }

  if(recommendedVideos.length == 0){
    return(
      <div calssName="alert alert-warning">
        Unable to suggest Recommended videos. Please watch more videos.
      </div>
    );
  }
  
  return (
    <div className="row">
       {recommendedVideos.map((video, index) =>{
        return(
          <div className="col-md-3"key = {video.id}>
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
                    onClick={handleManageWatchlist.bind(this,index)}
                    >
                    {video.isInWatchlist?"In watch list":"Add to watch list"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
       );
        })}
          </div>
  );
}

export default RecommendedVideos;