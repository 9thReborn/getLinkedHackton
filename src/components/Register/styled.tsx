import styled from "styled-components";



export const RegisterContainer = styled.div`
  // padding: 0.1rem;
  background-color: #150e28;
  position: relative;
  // border: 2px solid red;
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: start; 
  overflow-y: scroll;
`;

 export const gradientTextStyle = {
   background: "linear-gradient(90deg, #903AFF 3.08%, #FF26B9 93.85%)",
   backgroundClip: "text",
   WebkitBackgroundClip: "text",
   WebkitTextFillColor: "transparent",
 };

  export const registerLink = {
    borderRadius: "8px",
    background: "transparent",
    color: "white",
    padding: "10px 30px",
    border: "2px solid transparent",
    borderImage:
      "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
    borderImageSlice: "1",
    cursor: "pointer",
  };

  export const selectStyle = {
    width: "100%",
    height: "40px",
    borderRadius: "4px",
    border: "1px solid #FFF",
    background: "rgba(255, 255, 255, 0.03)",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    color: "white",
    marginTop: "5px",
    fontSize: "13px",
  };

  export const submitStyle = {
    borderRadius: "4px",
    width: "100%",
    marginTop: "10px",
    background:
      "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
    color: "white",
    padding: "10px 30px",
    border: "none",
    cursor: "pointer",
  };