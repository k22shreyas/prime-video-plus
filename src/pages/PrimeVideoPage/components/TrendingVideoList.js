import { useState } from "react";
import TrendingVideo from "./TrendingVideo";
 
const TrendingVideoList = () => {
  // state = component wide updateable data
  const [resolution, setResolution] = useState("HD");
  const [trendingVideos, /*setTrendingVideos*/] = useState([
    {
      id: 87654,
      title: "Man Vs Wild",
      description: "A Wild adventure show by Bear Grylls",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Infotainment",
      publishedOn: "2 days ago",
    },
    {
      id: 987654,
      title: "Planet Earth II",
      description: "A show hosted by David Attenborough on BBC Earth",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Infotainment",
      publishedOn: "3 days ago",
    },
  ]);
 
  console.log(trendingVideos);
 
  const handleChangeResolution = () => {
    console.log("Clicked");
    // whenever the state is updated, UI will also be updated
    setResolution("4K");
  };
 
  return (
    <div className="row">
      <h4>
        Enjoy watching the Trending shows in {resolution} |{" "}
        <button
          className="btn btn-primary btn-sm"
          onClick={handleChangeResolution}
        >
          Change Resolution
        </button>
      </h4>
      <div className="col-md-3">
        <TrendingVideo
          title={trendingVideos[0].title}
          thumbnailUrl={trendingVideos[0].thumbnailUrl}
          description={trendingVideos[0].description}
          category={trendingVideos[0].category}
          publishedOn={trendingVideos[0].publishedOn}
        />
      </div>
 
      <div className="col-md-3">
        <TrendingVideo
          title={trendingVideos[1].title}
          thumbnailUrl={trendingVideos[1].thumbnailUrl}
          description={trendingVideos[1].description}
          category={trendingVideos[1].category}
          publishedOn={trendingVideos[1].publishedOn}
        />
      </div>
    </div>
  );
};
 
export default TrendingVideoList;