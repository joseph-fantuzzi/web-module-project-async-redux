import React from "react";
import "../styles/Place.css";

const Place = (props) => {
  const { placeName, state, longitude, latitude } = props;

  return (
    <div className="place-container">
      <p className="location">
        {placeName} {state}
      </p>
      <p>
        Longitude: {longitude} Latitude: {latitude}
      </p>
    </div>
  );
};

export default Place;
