import React, { useState } from "react";
import "./search.css";
import Input from "../input/Input";

function Search({ setLyrics }) {
  const [songInfos, setSongInfos] = useState({ artistName: "", songName: "" });
  const getLyrix = async () => {
    try {
      const res = await fetch(
        `https://api.lyrics.ovh/v1/${songInfos.artistName}/${songInfos.songName}`
      );
      if (!res.ok) {
        console.log(`error status code: ${res.status}`);
      }
      const data = await res.json();
      setLyrics(data.lyrics);
      console.log("data", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="searchContainer">
      <div className="inputContainer">
        <Input
          {...{ placeholder: "Artist-Name", setSongInfos, name: "artistName" }}
        />
        <Input
          {...{ placeholder: "Song-Name", setSongInfos, name: "songName" }}
        />
      </div>
      <button onClick={getLyrix}>Search</button>
    </div>
  );
}

export default Search;
