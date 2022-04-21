import React, { Component } from "react";
import'./header.css'

class Header extends Component {
  constructor(){
    super();
    this.state={
      title:"Mugesh",
      address:'Tirunelveli'
    }
  }
updateAddress=()=>{
//this.state.address="Tirunelveli"
this.setState({address:"chennai"})
console.log('address',this.state)
}

updateName=()=>{
  //this.state.title="Mugesh"
  this.setState({title:"Murugeshkumar"})
  // console.log('Nickname',this.state)
  }

  render() {
    return ( 
      <React.Fragment>
    <div className="head">
    <button onClick={this.updateName}>change Name</button>
      {this.state.title}  from  {this.state.address}
      <button onClick={this.updateAddress}>change Address</button>
      
      </div> 
      
    </React.Fragment>
    )
   //<div className="head">from</div>
  }
}

export default Header;
