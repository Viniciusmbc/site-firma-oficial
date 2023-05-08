import React from "react";

interface HighlightWrapperProps {
  children: React.ReactNode;
  classname?: string;
}

const HighlightWrapper: React.FC<HighlightWrapperProps> = ({
  children,
  classname,
}) => (
  <div id="highlight-wrapper" className={`animate-highlight ${classname}`}>
    {children}
  </div>
);

export default HighlightWrapper;
