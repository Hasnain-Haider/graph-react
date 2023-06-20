import "./Grid.css";
import Node from "./Node";
import React from "react";
import { useSelector } from "react-redux";

export const Grid =  React.forwardRef((props, ref) => {
  const maze = useSelector((state) => state.maze.maze);

  const mapBoundariesToClassNames = (cell) => {
    let classNames = "";
    for (const boundary of cell.bounds) {
      if (classNames !== "") {
        classNames = `${classNames} `;
      }
      if (boundary === "B") {
        classNames = `${classNames}bottom`;
      } else if (boundary === "R") {
        classNames = `${classNames}right`;
      }
    }
    return classNames;
  };

  const render = () => {
    console.debug("Render grid, height=", maze.grid.length);
    return maze.grid.map((row, rowIndex) => (
      <div className="row" key={rowIndex}>
        {row.map((cell, colIndex) => (
          <Node
            className={mapBoundariesToClassNames(cell)}
            col={colIndex}
            row={rowIndex}
            key={`${colIndex},${rowIndex}`}
          />
        ))}
      </div>
    ));
  };

  return (
    <div ref={ref} className="grid">
      {render()}
    </div>
  );
});

export default Grid;
