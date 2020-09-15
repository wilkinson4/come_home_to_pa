'use strict';

var React = require("react");
var Core = require("@material-ui/core");
var Menu = require("@material-ui/icons/Menu");
var Colors = require("@material-ui/core/colors");
var Styles = require("@material-ui/core/styles");
var MaterialUi_ThemeProvider = require("@jsiebern/bs-material-ui/src/MaterialUi_ThemeProvider.bs.js");

var theme = Styles.createMuiTheme({
      palette: {
        primary: {
          main: Colors.blueGrey[900]
        }
      }
    });

function App(Props) {
  return React.createElement(MaterialUi_ThemeProvider.make, {
              children: React.createElement(Core.AppBar, {
                    children: React.createElement(Core.Toolbar, {
                          children: React.createElement(Core.IconButton, {
                                children: React.createElement(Menu.default, {
                                      color: "#FFF"
                                    })
                              })
                        }),
                    color: "primary",
                    position: "fixed"
                  }),
              theme: theme
            });
}

var make = App;

exports.theme = theme;
exports.make = make;
/* theme Not a pure module */
