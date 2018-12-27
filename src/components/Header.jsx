import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/logo.svg";

const Section = styled.header`
  background-color: #282c34;
  min-height: 20vmin;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  margin: 0 auto;
  animation: ${rotate360} infinite 20s linear;
  width: 120px;
  height: 120px;

  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`;

const pro = styled.img`
  color: none;
  background: none;
`;

const Header = ({ title }) => (
  <Section>
    <Logo src={logo} alt="logo" />
    <pro>{title}</pro>
  </Section>
);

export default Header;
