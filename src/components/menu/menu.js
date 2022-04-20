import React, { Component } from "react";
import'./menu.css'

class Menu extends Component {

  constructor() {
    super();
    this.state = {
      mailid: 'Prem3v@gmail.com'

    }
  }
  updateId = () => {
    //this.state.address="Tirunelveli"
    this.setState({ mailid: "Mugeshitaly17@gmail.com" })
    console.log('MAIL Address', this.state)
  }

  render() {
    return(
      <React.Fragment>
        <div className="menu">
          {this.state.mailid} 
          <button onClick={this.updateId}>Change eMailid</button>
  </div>;
      </React.Fragment>
      ) //<div className="menu"></div>;
  }
}

export default Menu;
