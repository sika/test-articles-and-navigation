import React from "react";

import StorySmall from "../components/StorySmall.js";

export default class Stories extends React.Component{

  render(){
    console.log("Stories");
    console.log(this.props);
    const story = [
      {article: {title: "story1", text: "one"}},
      {article: {title: "story2", text: "two"}},
      {article: {title: "story3", text: "three"}}
    ].map((article, i) => <StorySmall key={i} info={article}/> );
    // const story = [
    //   "story1",
    //   "story2",
    //   "story3",
    //   "story4"
    // ].map((title, i) => <Story key={i} title={title}/> );
    return(
      <div>
        <h1>Stories</h1>
        <div>{story}</div>
        {/* <Story title="test"/> */}
      </div>
    );
  }
}
