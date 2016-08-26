import React from "react";
import {Link} from "react-router";
export default class StorySmall extends React.Component{
  render(){
    console.log("StorySmall");
    console.log(this.props);
    const {title, text, id} = this.props.info;
    // const {title, text} = this.props.info.article;
    const shortText = text.substr(0,174) + "...";

    return(
    <div>
      <h4>
        <Link to={ `/stories/${id}/${title}` }>
          { title }
        </Link>
      </h4>
      <p>{shortText}</p>
    </div>
    );
  }
}
