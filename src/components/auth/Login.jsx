import React, { useState, useContext } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  CircularProgress,
  Paper,
  Box,
  Typography,
  Grid,
} from "@material-ui/core";
import Image from "../../assets/wp2952291.jpg";

import { UserContext } from "../../context/UserContext";
import actionType from "../../context/actionType";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { Copyright } from "../index";
import { Link, useHistory } from "react-router-dom";
import { SignIn, createUserProfile, getUser } from "../../helper";
const Login = () => {
  const history = useHistory();
  const classes = useStyles();
  const { dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const { user } = await SignIn(formData.email, formData.password);
      if (user) {
        createUserProfile(user);
        const userData = await getUser();
        dispatch({ type: actionType.setUser, payload: userData });
        dispatch({ type: actionType.setAuthentication, payload: true });
        history.push("/");
      }
      setFormData({ email: "", password: "" });
      setLoading(false);
    } catch (error) {
      setLoading(false);
     if (error.code === "auth/wrong-password") {
        alert(error.message);
     }
   }
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              helperText={error.email}
              error={error.email ? true : false}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={error.password}
              error={error.password ? true : false}
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
              //   disabled={loading || !formData.email || !formData.password}
            >
              Sign In
              {loading && (
                <CircularProgress size={30} className={classes.progess} />
              )}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default Login;
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${
      Image ? Image : "https://source.unsplash.com/random"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  progess: {
    position: "absolute",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
