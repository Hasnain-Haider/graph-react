import "./Buttons.css";

import React from "react";
import Button from "./Button";
import { setMaze } from "../redux/mazeReducer";
import { useDispatch, useSelector } from "react-redux";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap_white.css";

const dev = true;
function Buttons() {
  const dispatch = useDispatch();
  let height = useSelector((state) => state.maze.height);
  let width =  useSelector((state) => state.maze.width);

  const handleGenerateMaze = _ => {
    let authority;
    if (dev) {
      authority = "localhost:8080";
    } else {
      authority = "graph-api.hassu.us";
    }
    const url = `http://${authority}/generatemaze?height=${height}&width=${width}`;
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        console.debug(`Service was called, height:${height} width:${width}`);
        console.debug(res);
        dispatch(setMaze(res));
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
      <div className="buttons">
        <Button onClick={handleGenerateMaze} disabled={false}>
          Generate Maze !
        </Button>

        <Button onClick={console.debug} disabled={true}>
          Solve Maze For Me!
        </Button>
      </div>
  );
}

export default Buttons;
