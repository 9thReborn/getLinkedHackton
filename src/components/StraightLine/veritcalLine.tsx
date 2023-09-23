import React from "react";

interface VerticalLineProps {
  height: number;
  thickness: number;
  color: string;
}

const VerticalLine: React.FC<VerticalLineProps> = ({
  height,
  thickness,
  color,
}) => {
  const lineStyle: React.CSSProperties = {
    width: `${thickness}px`,
    height: `${height}px`,
    backgroundColor: color,
  };

  return <div style={lineStyle}></div>;
};

export default VerticalLine;
