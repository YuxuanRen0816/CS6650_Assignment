import React, { useContext } from "react";
import { GridContext } from "../context/GridContext";
import Cell from "./cell";

const Grid = () => {
  const { cells } = useContext(GridContext);

  return (
    <div style={{ 
      textAlign: "center", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh" 
    }}>
      <h2>Count: {cells.filter(Boolean).length}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 100px)", gap: "2px" }}>
        {cells.map((_, index) => (
          <Cell key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
