import { FC, ReactNode, MouseEvent, useRef } from "react";
import { ModalOverlay, ModalContent } from "./styled";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {


  const modalStyles = {
    display: isOpen ? "flex" : "none",
  };

  const modalOverlayRef = useRef<HTMLDivElement>(null);
  
   const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
     if (
       modalOverlayRef.current &&
       modalOverlayRef.current.contains(e.target as Node)
     ) {
       onClose();
     }
   };
  return (
    <ModalOverlay
      style={modalStyles}
      onClick={handleModalClick}
      ref={modalOverlayRef}
    >
      <ModalContent>{children}</ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
