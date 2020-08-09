import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Col.css";

function Col({ title, fetchUrl }) {
  const [charcters, setCharacters] = useState([]);
  console.log("kaines");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setCharacters(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="full">
      <div className="d">
        <img className="col" src={charcters.image} alt={charcters.name} />
      </div>
    </div>
  );
}

export default Col;
