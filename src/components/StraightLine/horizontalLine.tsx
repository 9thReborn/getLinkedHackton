import React from "react";

interface HorizontalLineProps {
  thickness: number;
  color: string;
  className?: string;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({
  
  thickness,
  color,
  className
}) => {
  const lineStyle: React.CSSProperties = {
    // width: `${length}px`,
    height: `${thickness}px`,
    backgroundColor: color,
  
  };

  return <div style={lineStyle} className={`${className} w-full`} ></div>;
};

export default HorizontalLine;