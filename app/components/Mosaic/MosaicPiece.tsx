import React from "react";

interface MosaicPieceProps {
  color: string;
}

const MosaicPiece = ({ color }: MosaicPieceProps) => {
  return <div className={`animate-mosaic w-12 h-12  bg-[${color}]`} />;
};

export default MosaicPiece;
