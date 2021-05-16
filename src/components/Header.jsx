import React from "react";
import {
  AppBar,
  Divider,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
  Link as NavLink,
} from "@material-ui/core";

import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../setup";

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const currentUser = firebase.auth().currentUser;
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/login");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Personalized Medicine Redefining Cancer Treatment
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              to="/"
              className={classes.link}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to="/about"
              className={classes.link}
            >
              About
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to="#"
              className={classes.link}
            >
              Contact
            </Link>
            <a
              variant="button"
              color="textPrimary"
              href="https://manish-ranjan.github.io/COVID-19-Tracker/"
              className={classes.link}
            >
              Covid-19
            </a>
            {currentUser && (
              <Typography
                variant="body"
                align="center"
                color="textSecondary"
                gutterBottom
                className={classes.link}
              >
                {currentUser.email.split("@")[0]}
              </Typography>
            )}
          </nav>
          <Divider />
          {currentUser ? (
            <Button
              onClick={handleLogout}
              color="secondary"
              variant="outlined"
              className={classes.link}
            >
              Sign out
            </Button>
          ) : (
            <Button
              href={"/login"}
              color="primary"
              variant="outlined"
              className={classes.link}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default Header;
const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));
