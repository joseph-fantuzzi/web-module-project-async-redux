import React from "react";

const Place = (props) => {
  const { placeName, state, longitude, latitude } = props;

  return (
    <div>
      <p>
        {placeName} {state}
      </p>
      <p>
        Longitude: {longitude} Latitude: {latitude}
      </p>
    </div>
  );
};

export default Place;
