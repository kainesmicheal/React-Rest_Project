import React from "react";
import "./styles.css";
import Search from "./Search";
import requests from "./requests";

export default function App() {
  return (
    <div className="App">
      <h1 className="rick"> Rick and Morty </h1>
      <Search title="Search" fetchurl={requests.episodes} />
    </div>
  );
}
