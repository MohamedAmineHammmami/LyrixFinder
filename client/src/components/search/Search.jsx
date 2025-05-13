import React from "react";
import "./search.css";
import Input from "../input/Input";

function Search() {
  return (
    <div className="searchContainer">
      <div className="inputContainer">
        <Input {...{ placehodler: "Artist-Name" }} />
        <Input {...{ placehodler: "Song-Name" }} />
      </div>
      <button>Search</button>
    </div>
  );
}

export default Search;
