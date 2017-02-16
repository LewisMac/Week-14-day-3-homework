import React from "react";
import Info from "./Info.jsx";

export default class Ships extends React.Component {

  constructor(props){
    super(props);
    this.getData(props, 1);
    this.state = {data:[], page: 1, selected: null}
  }

  callback(data){
    this.setState({data: data})
  }

  getData(props, pageNo){
    props.route.getDataFromAPI(`http://swapi.co/api/starships/?page=${pageNo}`, this.callback.bind(this));
  }

  handleButtonPageUp(){
   this.setState({page: this.state.page += 1})
   this.getData(this.props, this.state.page)
 }

 handleButtonPageDown(){
   this.setState({page: this.state.page -= 1})
   this.getData(this.props, this.state.page)
 }

 handleSelect(event){
   let newPerson = this.state.data[event.target.id]

   this.setState({selected: newPerson})

 }

 render(){
   let options = this.state.data.map(function(starship, index){
     return <div key={index}>
     <h4 onClick={this.handleSelect.bind(this)} id={index}>{starship.name}</h4>
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