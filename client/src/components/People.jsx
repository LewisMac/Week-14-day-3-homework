import React from "react";
import Info from "./Info.jsx";

export default class People extends React.Component {

  constructor(props){
    super(props);
    this.getData(props, 1);
    this.state = {data:[], page: 1, selected: null}
  }

  getData(props, pageNo){
    props.route.getDataFromAPI(`http://swapi.co/api/people/?page=${pageNo}`, this.callback.bind(this));
  }

  callback(data){
    // console.log("DATA:", data);
    this.setState({data: data})
  }

  handleButtonPageUp(){
    // console.log(this.props);
    this.setState({page: this.state.page += 1})
    this.getData(this.props, this.state.page)
    // console.log(this.state.page)
  }

  handleButtonPageDown(){
    // console.log("hi");
    this.setState({page: this.state.page -= 1})
    this.getData(this.props, this.state.page)
    // console.log(this.state.page)
  }

  handleSelect(event){
    // console.log(event.target.id)
    let newPerson = this.state.data[event.target.id]
    // console.log(newPerson);

    this.setState({selected: newPerson})

  }

  render(){
    let options = this.state.data.map(function(person, index){
      return <div key={index}>
      <h4 onClick={this.handleSelect.bind(this)} id={index}>{person.name}</h4>
      </div>
    }.bind(this))

    if(this.state.selected === null){
      return (
        <div>
        {options}
        <button id="next" onClick={this.handleButtonPageUp.bind(this)}>
        </button> 
        <button id="prev" onClick={this.handleButtonPageDown.bind(this)}>
        </button>
        </div>
        );
    } else {
      return (
        <div>
        <Info selected={this.state.selected}/>
        </div>
        )
    }
  }
}