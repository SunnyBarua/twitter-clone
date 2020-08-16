import React, { useState } from "react";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
import {
  Modal,
  makeStyles,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import { auth } from "../../firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(null);

  let history = useHistory();

  const SignUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));

    history.push("/login");
    alert("Congratulations!!!Your account successfully created!!!");
  };
  return (
    <div>
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
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
          </FormControl>
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
          <Button
            onClick={SignUp}
            type="submit"
            className="login__signInButton"
          >
            Sign Up
          </Button>
        </div>
      </div>
      ;
    </div>
  );
}

export default SignUp;
