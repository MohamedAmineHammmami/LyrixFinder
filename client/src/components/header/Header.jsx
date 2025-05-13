import React from "react";
import "./header.css";
import AnimatedIcon from "../animation/AnimatedIcon";

function Header() {
  return (
    <div className="headerContainer">
      <AnimatedIcon />
      <h1>Lyrix-Finder</h1>
    </div>
  );
}

export default Header;
