/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../action/index";
import { FormL, Input, Button, Main, Title, Label } from "./style";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(userLogin(login));
      setLogin({ email: "", password: "" });
    } catch (err) {
      console.log(`Error in LoginPage: ${err}`);
    }
    await navigate(`/user`);
  };

  return (
    <div>
      <Main>
        <div>
          <Title>Login Form</Title>
          <FormL>
            <form onSubmit={handleLogin}>
              <Label>Email</Label>
              <br />
              <Input
                type="email"
                name="email"
                value={login.email}
                placeholder="Email"
                onChange={(e) => {
                  setLogin({ ...login, email: e.target.value });
                }}
              />
              <br />
              <Label>Password</Label>
              <br />
              <Input
                type="password"
                name="password"
                value={login.password}
                placeholder="Password"
                onChange={(e) => {
                  setLogin({ ...login, password: e.target.value });
                }}
              />
              <br />
              <Button type="submit">Submit</Button>
            </form>
          </FormL>
        </div>
      </Main>
    </div>
  );
};

export default Login;
