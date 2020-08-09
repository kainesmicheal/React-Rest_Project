import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Col from "./Col";
//import requests from "./requests";

function Row({ title, fetchUrl, name }) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setEpisodes(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1 className="title">{title} </h1>
      <div className="list">
        {episodes.map((val) => (
          <h3 className="h3"> {val.name} </h3>
        ))}
      </div>
      <div className="row__posters">
        {episodes
          .filter((ep, i) => ep.name === name)
          .map((episode) => (
            <h1 key={episode.id} className="row__poster">
              {episode.characters
                .filter((c, i) => i < 10)
                .map((char) => (
                  <div className="ok">
                    <Col fetchUrl={char} />
                  </div>
                ))}
              <br />
              Name: {episode.name} <br /> Episode : {episode.episode} <br />{" "}
              Date : {episode.air_date}
            </h1>
          ))}
      </div>
    </div>
  );
}

export default Row;
