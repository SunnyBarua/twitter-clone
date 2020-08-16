import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import {
  Modal,
  makeStyles,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  let history = useHistory();

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    console.log(auth);
    if (auth.currentUser) {
      history.push("/");
    }
  };

  return (
    <div className="login">
      <div className="login__topPart">
        <Link to="/">
          <img
            className="login__logo"
            src="https://www.freepngimg.com/thumb/twitter/34996-2-twitter-transparent.png"
          />
        </Link>
        <h1>Log in to Twitter</h1>
      </div>

      <div className="login__container">
        <FormControl className="login__form">
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </FormControl>
        <FormControl className="login__form">
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormControl>
        <Button onClick={login} type="submit" className="login__signInButton">
          Login
        </Button>
      </div>
      <div className="login__bottomPart">
        <Link to="/" className="link">
          <p>Forgot password? </p>
        </Link>
        <Link to="/signup" className="link">
          <p>Sign up for Twitter </p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
