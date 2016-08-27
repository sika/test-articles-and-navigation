import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

var storiesJson = require('./data/stories.json');

import Layout from "./pages/Layout.js";
import Stories from "./pages/Stories.js";
import StorySmall from "./components/StorySmall.js";
import Story from "./components/Story.js";
import Pictures from "./pages/Pictures.js";
import Contact from "./pages/Contact.js";

const app = document.getElementById('app');
  console.log("client");
ReactDOM.render(

  <Router >
    <Route path="/" component={Layout}>
      <IndexRoute component={Contact}></IndexRoute>
      <Route path="/pictures" component={Pictures}></Route>
      <Route path="/stories" jsonObj={storiesJson} component={Stories}></Route>
      <Route path="/stories/:id(/:title)" jsonObj={storiesJson} component={Story}></Route>
    </Route>
  </Router>,
   app);
{/* <h1>React</h1> */}

//Layout should contain components A (e.g., Contact)
//these components A should set the layout for the it's content
//if the content is in multiples, such as articles, these componentes A
//should in turn load in other components B.
//In this project, it is logical that only Stories loads multiples of a component
// that holds content
