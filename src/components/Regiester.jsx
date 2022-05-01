import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../action/index";
import { useNavigate } from "react-router-dom";
import { Title, Main, Button, Input, FormR, Label } from "./style";

const Register = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userData);
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      dispatch(userRegister(data));
      setData({ username: "", email: "", password: "" });
    } catch (err) {
      console.log(`Error in RegisterPage: ${err}`);
    }
    await navigate(`/login`);
  };

  return (
    <div>
      <Main>
        <div>
          <Title>Registration Form</Title>
          <FormR>
            <form onSubmit={handleRegister}>
              <Label>Username</Label> <br />
              <Input
                type="text"
                name="username"
                value={data.username}
                placeholder="Username"
                onChange={(e) => {
                  setData({ ...data, username: e.target.value });
                }}
              />
              <br />
              <Label>Email</Label> <br />
              <Input
                type="email"
                name="email"
                value={data.email}
                placeholder="Email"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
              <br />
              <Label>Password</Label> <br />
              <Input
                type="password"
                name="password"
                value={data.password}
                placeholder="Password"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
              <br />
              <Button type="submit">Submit</Button>
            </form>
          </FormR>
        </div>
      </Main>
    </div>
  );
};

export default Register;
