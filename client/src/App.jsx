import React from "react";
import "./App.css";
import Search from "./components/search/Search";
import Header from "./components/header/Header";
import Lyrix from "./components/lyrix/Lyrix";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Search />
        <Lyrix />
      </div>
    </>
  );
}

export default App;
