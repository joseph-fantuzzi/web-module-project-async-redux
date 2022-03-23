import React from "react";
import { connect } from "react-redux";
import "./App.css";
import ZipInfo from "./ZipInfo";

import { inputChange, fetchZip } from "./action-creators";

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
      <h1>ZIPPY</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="search">Search for a Zip Code</label>
        <input type="text" id="search" name="search" value={search} onChange={changeHandler} />
        <button>Search</button>
      </form>
      {error && <p>{error}</p>}
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
