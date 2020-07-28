import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import {
  AuthSignIn,
  AuthSignUp,
  Home,
  ManageHome,
  ManageCategory,
  ManageNotice,
} from "./routes";
import axios from "axios";

const App = ({ autoSignIn }) => {
  useEffect(() => {
    axios
      .get("/logged")
      .then(function (res) {
        if (res.data.user) {
          autoSignIn(res.data.user);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [autoSignIn]);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/manage/notice/search/type/:type/Keyword/:Keyword"
          component={ManageNotice}
        />
        <Route exact path="/manage/notice" component={ManageNotice} />
        <Route exact path="/manage/category" component={ManageCategory} />
        <Route exact path="/manage" component={ManageHome} />
        <Route exact path="/auth/signup" component={AuthSignUp} />
        <Route exact path="/auth/signin" component={AuthSignIn} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
