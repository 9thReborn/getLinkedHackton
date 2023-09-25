import React, {ReactNode} from "react";

interface ButtonProps {
  name: string;
  icon?: ReactNode;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ name,icon, color,style, onClick, className }) => {
  const buttonStyle: React.CSSProperties = {
    borderRadius: "4px",
    background:
      "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
    color: "white",
    padding: "10px 30px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      className={`${className} transform hover:scale-125 transition-transform duration-300`}
    >
      {name}
      {icon}
    </button>
  );
};

export default Button;
