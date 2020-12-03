import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from "./Home";
import Nav from "./components/Nav";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function MyApp() {
 
 
  return (
    <Router>
      <Nav />
      <ToastContainer position="top-center"/>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default MyApp;
