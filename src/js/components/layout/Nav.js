import React from "react";
import {Link} from "react-router";

export default class Nav extends React.Component{
  render(){
    return(
      <nav class="navbar navbar-light bg-faded">
        <ul class="nav navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">Contact</Link>
            {/* <a class="nav-link" href="#">Contact <span class="sr-only">(current)</span></a> */}
          </li>
          <li class="nav-item">
            {/* <a class="nav-link" href="#">Pictures</a> */}
            <Link class="nav-link" to="/pictures">Pictures</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/stories">Stories</Link>
            {/* <a class="nav-link" href="#">Stories</a> */}
          </li>
        </ul>
      </nav>
    );
  }
}
