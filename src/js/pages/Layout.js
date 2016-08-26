import React from "react";

import Nav from "../components/layout/Nav.js";

export default class Layout extends React.Component{
  render(){
    console.log("Layout component");
    console.log(this.props.children);
    return(
      <div>
        <Nav/>
        {/* <h1>Layout</h1> */}
        {this.props.children}
      </div>
    );
  }
}
