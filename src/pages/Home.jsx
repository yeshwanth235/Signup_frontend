import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  margin-top: 11.5%;
  font-size: 80px;
  text-align: center;
  font-weight: 530;
  color: black;
  letter-spacing: 3.5px;
`;

const Info = styled.p`
  color: white;
  position: absolute;
  text-align: left;
  align-item: center;
  font-size: 25px;
  letter-spacing: 1px;
`;

const HomeB = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;

const Button = styled.button`
  width: 250px;
  height: 70px;
  margin: 135px;
  color: white;
  font-size: 1.75rem;
  font-family: "Bungee", cursive;
  font-weight: bold;
  letter-spacing: 2px;
  border: 1px solid #f9f9f9;
  background: transparent;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  cursor: pointer;
  transition: all 1s;
  &:hover {
    color: #32c5cd;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Title>Home Page</Title>
      <HomeB>
        <Button
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </Button>

        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
        <Info>Click Register for New Users / Already Exists Login</Info>
      </HomeB>
    </div>
  );
};

export default Home;
