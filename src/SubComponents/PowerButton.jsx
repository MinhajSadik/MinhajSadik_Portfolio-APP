import React from "react";
import styled from "styled-components";

const PowerButton = () => {
  const Power = styled.button`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%, 0);
  `;
  return <Power>Home</Power>;
};

export default PowerButton;
