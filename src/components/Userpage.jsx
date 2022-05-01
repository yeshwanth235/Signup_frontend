import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button, Title, Pg } from "./style";

const Main = styled.div`
  text-align: center;
`;

const Userpage = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userData);

  const handleClick = async () => {
    userInfo.loggedIn = false;
    if (!userInfo.loggedIn) {
      await navigate(`/`);
    }
  };
  return (
    <div>
      <Title>Userpage</Title>
      <Main>
        <Pg>
          Welcome ✌️ <br /> You have login Successfully
        </Pg>
        <br />
        <Button onClick={() => handleClick()}>Logout</Button>
      </Main>
    </div>
  );
};

export default Userpage;
