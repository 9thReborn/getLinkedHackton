import styled from "styled-components";

export const MainContainer = styled.div`
background-color: #150E28;
overflow: hidden;

`;

export const gradientTextStyle = {
  background: "linear-gradient(90deg, #903AFF 3.08%, #FF26B9 93.85%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export const registerLink = {
  borderRadius: "4px",
  background:
    "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
  color: "white",
  padding: "10px 30px",
  border: "none",
  cursor: "pointer",
};