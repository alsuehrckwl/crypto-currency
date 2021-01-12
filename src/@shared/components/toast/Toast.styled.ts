import styled from "styled-components";

export const ToastWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  padding: 32px 32px 16px 32px;
  overflow: hidden;
  color: #fff;
  z-index: 10000;
`;

export const ToastItem = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: 200px;
  margin-bottom: 16px;
  border: 1px solid #a8aeb9;
  border-radius: 8px;
  background-color: #bccced;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);
 
  span {
    padding-left: 16px;
    color: #000;
    font-size: 12px;
    font-weight: bold;
  }
`;
