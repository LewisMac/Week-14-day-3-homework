import React from 'react';

export default class Home extends React.Component{

  constructor(props){
    super(props);
    // console.log(props)
    // this.state = { people: [], focusPerson: null, data: [] }
  }
  
  render(){
    // console.log(this)
    return(
      <div>
        <h3> Home </h3>
        <p> Info about Star Wars Stuff </p>
      </div>
    )
  }
}