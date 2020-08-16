import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import FirstPage from "./components/FirstPage/FirstPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/firstpage">
            <FirstPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="">
            <Sidebar />
            <Feed />
            <Widgets />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
