import LatestVideoList from "./components/LatestVideoList";
import Subscription from "./components/Subscription";
import TrendingVideoList from "./components/TrendingVideoList";
import { useNavigate } from "react-router-dom";
import RecommendVideoList from "./components/RecommendedVideoList";

const PrimeVideoPage = () => {

  const navigate = useNavigate();
  const handleClick = () => navigate("/products");

  return (
    <div>
      <div className="row">
      <div className="col-md-10 mb-3">
      <h1>Prime Video App</h1>      
      </div>
      <div className="col-md-2 mb-3">
      <button className="btn btn-primary col-12 mt-2" onClick={handleClick}>
          Buy Products
        </button>
      </div>
      </div>
      <h2>Latest Videos | Props Demo</h2>
      <LatestVideoList />

      <hr />
      <h2>Trending Videos | States and Events Demo</h2>
      <TrendingVideoList />

      <hr />
      <h2>
        Recommended Videos | States, Events, Conditional Rendering, Lists & Keys
        Demo
      </h2>
      <RecommendVideoList />


      <hr />
      <h2>Styling in React JS</h2>
      <Subscription />
    </div>
  );
};

export default PrimeVideoPage;
