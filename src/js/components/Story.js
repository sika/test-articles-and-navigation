import React from "react";
// export default class Story extends React.Component{
//   render(){
export default (props) => {
  console.log("Story");
  var text;
  const {title, id} = props.params;
  const idNumber = parseInt(id, 10);
  const jsonObj = getJsonObj();
  function getJsonObj(){
    return props.route.jsonObj;
  }
  function getText(){
    var articleArray = jsonObj.article;
    for(var i = 0; i<articleArray.length; i++){
      if(articleArray[i].id === idNumber){
        console.log(" true");
        text = articleArray[i].text;
        console.log(text);
      }
    }

    }
  getText();
  console.log("END story");
  return (
    <div>
      <h1>Story</h1>
      {<h4>{title}</h4>}
      {/* {console.log(this);} */}
      {<p>{text}</p>}

    </div>
  );
}
