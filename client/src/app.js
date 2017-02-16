import React from "react"
import ReactDOM from "react-dom"
import Main from "./components/Main.jsx"
import Home from "./components/Home.jsx"
import People from "./components/People.jsx"
import Ships from "./components/Ships.jsx"
import StarWarsContainer from "./containers/StarWarsContainer.jsx"

import {Router, Route, IndexRoute, hashHistory} from "react-router"


window.onload = () => {
  ReactDOM.render(
    <StarWarsContainer/>,
    document.getElementById("app")
    );
}


