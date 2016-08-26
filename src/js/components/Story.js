import React from "react";
// export default class Story extends React.Component{
//   render(){
export default (props) => {
  console.log("Story");
  // console.log(this.props.route.jsonObj.article);
  console.log(props);
  const {title, id} = props.params;
  console.log(id);

  // const {title, text} = props.route.jsonObj.article;

  // const {title, text} = this.props.info.article;

  return (
    <div>
      <h1>Story</h1>
      {/* <h4>{title}</h4> */}
      {/* <p>{text}</p> */}

    </div>
  );
}
