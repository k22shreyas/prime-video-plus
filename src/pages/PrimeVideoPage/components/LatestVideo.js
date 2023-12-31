import PropTypes from "prop-types";

const LatestVideo = (props) => {
  // receiveing data thru props
  console.log(props);
  /*
   * props are objects
   * props are read-only
   * props are the way to receive data from parent comp
   * props can have children property
   */

  return (
    <div className="card">
      <img
        src={props.thumbnailUrl}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.children}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.category}</li>
        <li className="list-group-item">{props.publishedOn}</li>
      </ul>
    </div>
  );
};

LatestVideo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  publishedOn: PropTypes.string.isRequired,
  children: PropTypes.node //just checks if the prop type is a react node
};

export default LatestVideo;
