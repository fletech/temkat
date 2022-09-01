import React from "react";
import styled from "styled-components";

const Toast = ({ error }) => {
  return (
    <ToastStyled>
      <i className="fas fa-exclamation-circle"></i>
      <p>{error}</p>
    </ToastStyled>
  );
};
const ToastStyled = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--alert);
  opacity: 0.9;
  width: 50%;
  min-height: 5rem;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px var(--heading);
  border-radius: 2px;
  i,
  p {
    font-size: 1.2rem;
    color: var(--white);
    margin: 0 0.3rem;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
`;
export default Toast;
