let theme = MaterialUi_Theme.create({
  open MaterialUi_ThemeOptions
  make(
    ~palette=PaletteOptions.make(
      ~primary=Primary.make(~main=MaterialUi.Colors.blueGrey.c900, ()),
      (),
    ),
    (),
  )
})

@react.component
let make = () => {
  open MaterialUi
  <MuiThemeProvider theme>
    <AppBar color=#Primary position=#Fixed>
      <Toolbar> <IconButton> <MenuIcon color="#FFF"/> </IconButton> </Toolbar>
    </AppBar>
  </MuiThemeProvider>
}
