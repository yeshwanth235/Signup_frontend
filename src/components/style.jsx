import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;

export const Title = styled.h1`
  font-size: 80px;
  text-align: center;
  font-weight: 530;
  color: black;
  font-family: "Bungee", cursive;
  letter-spacing: 3.5px;
`;

export const Pg = styled.p`
  font-size: 35px;
  color: white;
  letter-spacing: 1px;
`;

export const Label = styled.label`
  margin-left: 0.7rem;
  color: white;
  letter-spacing: 2px;
  font-size: 2rem;
  font-weight: 400px;
`;

export const Input = styled.input`
  padding: 0.2em;
  margin: 0.2em;
  text-align: center;
  width: 22rem;
  height: 2.5rem;
  font-size: 2rem;
  letter-spacing: 1px;
  border: 1px solid #f9f9f9;
  background: transparent;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  cursor: pointer;
  transition: all 1s;
  &:hover {
    color: #white;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  ::placeholder {
    font-size: 1.5rem;
    opacity: 0.5;
    letter-spacing: 0.25rem;
    color: white;
  }
`;

export const FormR = styled.div`
  margin-left: 28%;
`;

export const FormL = styled.div`
  margin-left: 11%;
`;

export const Button = styled.button`
  width: 250px;
  height: 55px;
  margin-top: 2rem;
  margin-left: 4rem;
  color: white;
  font-size: 1.25rem;
  font-family: "Bungee", cursive;
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
