import * as React from "react";
import { Shape } from "./shape";

interface BoardProps {
  shapes: Array<Shape>;
}

function Board(props: BoardProps) {
  const { shapes } = props;
  return <React.Fragment>{shapes.length}</React.Fragment>;
}

export default Board;
