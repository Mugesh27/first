import React, { Component } from "react";
import'./navbar.css'

class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      contactnumber: '9677553622'

    }
  }
  updateNumber = () => {
    //this.state.address="Tirunelveli"
    this.setState({ contactnumber: "8144414305" })
    console.log('cell number', this.state)
  }
  render() {
    return(
      <React.Fragment>
        <div className="footer">
          {this.state.contactnumber} 
          <button onClick={this.updateNumber}>Change Ph.Number</button>
  </div>;
      </React.Fragment>
      )
     //<div className="navbar">navbar</div>;
  }
}

export default Navbar;
