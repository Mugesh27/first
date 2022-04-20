import React, { Component } from "react";
import './footer.css'
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      pincode: '627416'

    }
  }
  updatePinCode = () => {
    //this.state.address="Tirunelveli"
    this.setState({ pincode: "600113" })
    console.log('address', this.state)
  }


  render() {
    return(
    <React.Fragment>
      <div className="footer">
        {this.state.pincode} 
        <button onClick={this.updatePinCode}>Change Pincode</button>
</div>;
    </React.Fragment>
    )
  }
}

export default Footer;
