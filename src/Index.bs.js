'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$Come_home_to_pa = require("./App.bs.js");

var root = document.querySelector("#root");

if (!(root == null)) {
  ReactDom.render(React.createElement(App$Come_home_to_pa.make, {}), root);
}

/* root Not a pure module */
