import styled from "styled-components";

export const ModalOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(21, 14, 40, 0.93);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  // background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 24px;
`;

export const modelOverlay = {
  display: "flex",
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(21, 14, 40, 0.93)",
  justifyContent: "center",
  alignItems: "center",
};