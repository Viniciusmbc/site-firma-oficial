import React from "react";

interface HighlightWrapperProps {
  children: React.ReactNode;
}

const HighlightWrapper: React.FC<HighlightWrapperProps> = ({ children }) => (
  <div id="highlight-wrapper" className="animate-highlight">
    {children}
  </div>
);

export default HighlightWrapper;
