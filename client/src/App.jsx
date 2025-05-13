import React, { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import Header from "./components/header/Header";
import Lyrics from "./components/lyrics/Lyrics";

function App() {
  const [lyrics, setLyrics] = useState("");
  return (
    <div className="container">
      <Header />
      <Search {...{ setLyrics }} />
      <Lyrics {...{ lyrics }} />
    </div>
  );
}

export default App;
