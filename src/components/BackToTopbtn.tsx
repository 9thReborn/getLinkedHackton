import styled from "styled-components";
import Button from "./Button/Button";
import { BsArrowUpCircle } from "react-icons/bs";
import { useEffect, useState } from "react";

const BackToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);

  const goBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <BtnWrapper>
          <Button
            name=""
            color="#9031D0"
            icon={<BsArrowUpCircle />}
            style={{
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0",
              fontSize: "1.5rem",
              marginRight: "50px",
            }}
            onClick={goBackToTop}
          />
        </BtnWrapper>
      )}
    </>
  );
};

export default BackToTopBtn;

const BtnWrapper = styled.div`
  position: fixed;
  bottom: 2.5rem;
  right: 3.2rem;
  z-index: 99999;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
