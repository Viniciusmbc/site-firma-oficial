import React from "react";

const Mosaic = () => {
  const numRows = 10;
  const numCols = 20;

  const squares = [];

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      squares.push(
        <div
          key={`${row}-${col}`}
          className=" w-36 h-36 bg-gray-500 opacity-0 animate-mosaic flex"
          style={{
            animationDelay: `${(row * numCols + col) * 20}ms`,
          }}
        />
      );
    }
  }

  return <div className=" flex flex-wrap">{squares}</div>;
};

export default Mosaic;
