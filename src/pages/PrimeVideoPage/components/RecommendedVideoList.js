import { useState } from "react";
import RecommendedVideos from "./RecommendedVideos";
 
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
    //donot mutate state directly
    setRecommendedVideos(videos);
  };
 
  return (
    <div className="row">
      {recommendedVideos.map((video, index) => {
        return (
          <div className="col-md-3" key={video.id}>
            <RecommendedVideos
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