import React from "react";
import { connect } from "react-redux";
import ZipInfo from "./ZipInfo";
import "../styles/App.css";

import { inputChange, fetchZip } from "../redux/action-creators";

function App(props) {
  const { search, error, inputChange, fetchZip } = props;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    inputChange(name, value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchZip(search);
  };

  return (
    <div>
      <div className="header">
        <h1>ZIPPY</h1>
        <h2 className="info">Zip Code Information Center</h2>
      </div>
      <div className="container">
        <form onSubmit={submitHandler}>
          <label htmlFor="search" id="zip-title">
            Zip Code
          </label>
          <input type="text" id="search" name="search" value={search} onChange={changeHandler} />
          <button className="button">Search</button>
        </form>
      </div>
      {error && <p className="error-msg">{error}</p>}
      <ZipInfo />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    error: state.error,
  };
};

export default connect(mapStateToProps, { inputChange, fetchZip })(App);
