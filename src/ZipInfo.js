import React from "react";
import { connect } from "react-redux";

import Place from "./Place";

const ZipInfo = (props) => {
  const { zip } = props;

  return (
    zip && (
      <div>
        <h1>
          Zip Code: {zip["post code"]} {zip.country}
        </h1>
        <h2>Places:</h2>
        {zip.places.map((place) => {
          return (
            <Place
              placeName={place["place name"]}
              state={place.state}
              longitude={place.longitude}
              latitude={place.latitude}
              key={place.latitude}
            />
          );
        })}
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    zip: state.zip,
  };
};

export default connect(mapStateToProps)(ZipInfo);
