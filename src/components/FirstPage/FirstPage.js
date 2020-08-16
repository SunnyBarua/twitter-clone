import React from "react";
import { Button, Link } from "@material-ui/core";
import "./FirstPage.css";
import bg from "./twtbck.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useHistory } from "react-router-dom";

function FirstPage() {
  let history = useHistory();
  const signUp = (e) => {
    e.preventDefault();
    history.push("/signup");
  };
  const login = (e) => {
    e.preventDefault();
    history.push("/login");
  };
  return (
    <div className="first__page">
      <div className="left__portion">
        <img src={bg} className="bcg" />
      </div>
      <div className="right__portion">
        <div className="right__side">
          <TwitterIcon fontSize="large" className="fontSize__logo" />
          <div className="firstPage__header">
            <h1>See what's happening in the world right now</h1>
          </div>
          <p>Join Twitter today</p>
          <Button onClick={signUp} type="submit" className="signUp__Button">
            Sign Up
          </Button>
          <br />
          <Button onClick={login} type="submit" className="login__Button">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
