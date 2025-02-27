import React, { useContext } from "react";
import { GridContext } from "../context/GridContext";

const Cell = ({ index }) => {
  const { cells, toggleCell } = useContext(GridContext);

  return (
    <div
      onClick={() => toggleCell(index)}
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid grey",
        backgroundColor: cells[index] ? "black" : "white",
        cursor: "pointer"
      }}
    />
  );
};

export default Cell;
