import React, { useEffect, useContext } from "react";
import { UserContext } from "./context/UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "./setup";
import { Login, SignUp, Header, Home, About } from "./components";
import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";
import actionType from "./context/actionType";
import { getUser, createUserProfile } from "./helper";
import styles from "./App.css";
import "firebase/auth";
import "firebase/firestore";
const Chat = () => {
  return <div>Chat</div>;
};
const auth = firebase.auth;

const App = (props) => {
  const { authenticated, dispatch } = useContext(UserContext);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      if (user) {
        createUserProfile(user);
        const userData = getUser();
        dispatch({ type: actionType.setUser, payload: userData });
        dispatch({ type: actionType.setAuthentication, payload: true });
      } else {
        dispatch({ type: actionType.setAuthentication, payload: false });
      }
    });
    return subscriber;
  }, []);
  console.log(authenticated);
  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <Switch>
          <PrivateRoute
            authenticated={authenticated}
            exact
            path="/"
            component={Home}
          />
          <PrivateRoute
            path="/chat"
            authenticated={authenticated}
            component={Chat}
          />
          <PublicRoute
            path="/register"
            authenticated={authenticated}
            component={SignUp}
          />
          <Route
            path="/about"
            component={About}
          />
          <PublicRoute
            path="/login"
            authenticated={authenticated}
            component={Login}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
