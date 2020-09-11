'use strict';

var React = require("react");
var Core = require("@material-ui/core");
var Menu = require("@material-ui/icons/Menu");

function App(Props) {
  return React.createElement(Core.AppBar, {
              children: React.createElement(Core.Toolbar, {
                    children: React.createElement(Core.IconButton, {
                          children: React.createElement(Menu.default, {})
                        })
                  }),
              position: "fixed"
            });
}

var make = App;

exports.make = make;
/* react Not a pure module */
