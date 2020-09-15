'use strict';

var Styles = require("@material-ui/core/styles");

var theme = Styles.createMuiTheme({
      palette: {
        primary: {
          main: "#8fe830"
        }
      }
    });

exports.theme = theme;
/* theme Not a pure module */
