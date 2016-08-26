import React from "react";

import StorySmall from "../components/StorySmall.js";
import Story from "../components/Story.js";

export default class Stories extends React.Component{

  render(){
    console.log("Stories");
    console.log(this.props.route.jsonObj.article);
    const objTest = this.props.route.jsonObj.article;
    const storySmall =  objTest.map(function (article, i) {
          return <StorySmall key={i} info={article}/>;
        });
    console.log(storySmall);
/*    [
      {article: {
        title: "story1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},

      {article: {
        title: "story2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},

      {article: {
        title: "story3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}}
    // ].map((article, i) => <StorySmall key={i} info={article}/> );
  ]*/


    return(
      <div>
        <h1>Stories</h1>
        <div>{storySmall}</div>
        {/* <Story title="test"/> */}
      </div>
    );
  }
}
