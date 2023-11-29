import LatestVideoList from "./components/LatestVideoList";
import TrendingVideoList from "./components/TrendingVideoList";
import RecommendedVideos from "./components/RecommendedVideos";
import Subscription from "./components/Subscription";

const PrimeVideoPage = () => {
  return (
    <div>
      <h1>Prime Video App</h1>
      <h2>Latest Videos | Props Demo</h2>
      <LatestVideoList />

      <hr />
      <h2>Trending Videos | States and Events Demo</h2>
      <TrendingVideoList />

      <hr />
      <h2>
        Recommended Videos | States, Events, Conditional Rendering, Lists & Keys
      </h2>
        <RecommendedVideos />
      <hr />
      <h2>Styling in React JS</h2>
        <Subscription />
    </div>
  );
};

export default PrimeVideoPage;