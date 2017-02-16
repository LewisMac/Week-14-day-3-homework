import React from "react";
import Home from "./Home.jsx";

import {Link} from "react-router"

export default class Main extends React.Component {
  render() {
    return (
    <div>
      <h3>Main App</h3>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/ships">Ships</Link>
        </li>
        <li>
          <Link to="/species">Species</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/vehicles">Vehicles</Link>
        </li>
      </ul>
      {this.props.children}
    </div>
    );
  }
}