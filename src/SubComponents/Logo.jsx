import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../Components/Themes";

const LogoText = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;
  cursor: pointer;

  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 3;
`;

const Logo = (props) => {
  return (
    <LogoText color={props.theme} to="/skills">
      MinhajSadik
    </LogoText>
  );
};

export default Logo;
