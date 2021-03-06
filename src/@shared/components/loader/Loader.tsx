import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderStyle = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  font-size: 10px;
  text-indent: -9999em;
  border-top: 3px solid rgba(255, 0, 0, 0.2);
  border-right: 3px solid rgba(255, 0, 0, 0.2);
  border-bottom: 3px solid rgba(255, 0, 0, 0.2);
  border-left: 3px solid #c70e0e;
  border-radius: 50%;
  transform: translateZ(0);
  animation: ${rotate} 0.8s infinite linear;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  width: 100%;
`;

export function Loader() {
  return (
    <LoaderWrapper>
      <LoaderStyle />
    </LoaderWrapper>
  );
}
