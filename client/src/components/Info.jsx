import React from "react";
import People from "../components/People.jsx";

export default class Info extends React.Component {

  constructor(props){
    super(props);
    this.sortData(props.selected);
  }

  sortData(infoObject){
    // console.log(infoObject)
    const allStringParams = {}
    for( let i = 0; i < Object.keys(infoObject).length; i++){
      if (typeof infoObject[Object.keys(infoObject)[i]] === "string" && infoObject[Object.keys(infoObject)[i]].slice(0,4) !== "http" && Object.keys(infoObject)[i] !== "created" && Object.keys(infoObject)[i] !== "edited"){
        allStringParams[Object.keys(infoObject)[i].replace(/_|-/g, " ")] = infoObject[Object.keys(infoObject)[i]];
      }
    }
    this.state = {allParams: allStringParams}
    // console.log(allStringParams)
  }

  render(){

    let options = Object.keys(this.state.allParams).map(function(key, index){
      return <div key={index}>
      <h5 id={index}>{key}: </h5><p>{this.state.allParams[key]}</p>
      </div>
    }.bind(this))

    return (
      <div>
      {options}
      </div>
    )
  }
}