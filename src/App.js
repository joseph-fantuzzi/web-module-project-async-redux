import React from "react";
import { connect } from "react-redux";
import "./App.css";

//https://api.zippopotam.us/us/33162

function App() {
  const changeHandler = (e) => {
    const { name, value } = e.target;
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Zip Code Information</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="search">Search a Zip Code</label>
        <input type="text" id="search" value="" onChange={changeHandler} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default connect(null, {})(App);
