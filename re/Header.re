/* module Styles = { */
/*   open Css; */
/*   let header = */
/*     style([backgroundColor(hex("db4d3f")), marginBottom(px(16))]); */
/*   let content = */
/*     style([ */
/*       display(`flex), */
/*       alignItems(`center), */
/*       justifyContent(`spaceBetween), */
/*       margin2(~v=px(0), ~h=`auto), */
/*       maxWidth(px(1000)), */
/*       padding2(~v=px(16), ~h=px(24)), */
/*     ]); */
/*   let h1 = style([margin(px(0))]); */
/*   let link = style([color(white), textDecoration(none)]); */
/*   let nav = style([]); */
/* }; */

[@react.component]
let make = (~siteTitle) => {
  MaterialUi.(<header> <AppBar position=`Static /> </header>);
};

let default = make;
