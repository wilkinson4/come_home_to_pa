import React from 'react';
import {
  AppBar,
  Button,
  Container,
  Link,
  Theme,
  Toolbar,
  createStyles,
  makeStyles
} from "@material-ui/core";

import BerkshireLogo from "./svg/berkshireLogo.svg"

const useStyles = makeStyles((theme: Theme) => createStyles({
  logo: {
    flexGrow: 1,
    height: "60px",
    margin: theme.spacing(1.5),
    width: "auto"
  },
  navItems: {
    marginLeft: "auto",
    "& > *": {
      color: theme.palette.primary.main,
      fontWeight: 400,
    }
  },
  root: {
    flexGrow: 1,
  }
}),
);

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="transparent">
        <Container maxWidth="lg" >
          <Toolbar>
            <Link href="/">
              <img src={BerkshireLogo} alt="Berkshire Logo" className={classes.logo} />
            </Link>
            <div className={classes.navItems}>
              <Button>Properties</Button>
              <Button>School Districts</Button>
              <Button>Communities</Button>
              <Button>Resources</Button>
              <Button>Contact</Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar >
    </div>
  )
}
