import React from "react"
import Main from "../components/Main.jsx"
import Home from "../components/Home.jsx"
import People from "../components/People.jsx"
import Ships from "../components/Ships.jsx"
import Planets from "../components/Planets.jsx"
import Species from "../components/Species.jsx"
import Vehicles from "../components/Vehicles.jsx"

import {Link} from "react-router"
import {Router, Route, IndexRoute, hashHistory} from "react-router"

export default class StarWarsContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = { data: null }
  }

  getDataFromAPI(url, callback){
    // console.log(this)
    var request = new XMLHttpRequest;
    request.open("GET", url);
    request.onload = () => {
      if(request.status === 200) {
        var data = JSON.parse(request.responseText).results;
        // console.log(this)
        // this.setState({ data: data })
        callback(data)
      };
    };
    request.send(null);
  }

  render() {
    // console.log(this.state.data);
    const routes = (
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="Home" component={Home} information={this.state.data} getDataFromAPI={this.getDataFromAPI.bind(this)} />
        <Route path="People" component={People} information={this.state.data} getDataFromAPI={this.getDataFromAPI.bind(this)} />
        <Route path="Ships" component={Ships} information={this.state.data} getDataFromAPI={this.getDataFromAPI.bind(this)} />
        <Route path="Vehicles" component={Vehicles} information={this.state.data} getDataFromAPI={this.getDataFromAPI.bind(this)} />
        <Route path="Planets" component={Planets} information={this.state.data} getDataFromAPI={this.getDataFromAPI.bind(this)} />
        <Route path="Species" component={Species} information={this.state.data} getDataFromAPI={this.getDataFromAPI.bind(this)} />
      </Route>
      )

    return (
      <Router history={hashHistory}>
      {routes}
      </Router>
      
      );
  }

}