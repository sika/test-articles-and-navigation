import React from "react";
import {Link} from "react-router";
export default class StorySmall extends React.Component{
  render(){
    console.log(this.props);
    // const {title, text} = this.props.article;
    const {title, text} = this.props.info.article;

    return(
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
    );
  }
}
