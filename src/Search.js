import React, { Component } from "react";
//import axios from "./axios";
import "./Search.css";
import Row from "./Row";
import requests from "./requests";

class Search extends Component {
  state = {
    query: ""
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  render() {
    return (
      <form>
        <h1 className="Search">
          Search{": "}
          <input
            className="input"
            placeholder="Type the name here, carefull with spaces...Result will be shown below"
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
          />
        </h1>

        <p>
          <Row
            title="Episodes"
            name={this.state.query}
            fetchUrl={requests.episodes}
          />
        </p>
      </form>
    );
  }
}

export default Search;
