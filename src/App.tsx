import * as React from "react";
import "./styles.css";
import { Shape, ShapeKinds } from "./shape";
import Board from "./Board";

const shapes: Array<Shape> = [
  { x: 1, y: 1, hidden: true, kind: ShapeKinds.Circle, thing: true },
  { x: 2, y: 2, hidden: true, kind: ShapeKinds.Rectangle },
  { x: 3, y: 3, hidden: true, kind: ShapeKinds.Diamond }
];

export default function App() {
  return (
    <div className="App">
      <h1>The Memory Game</h1>
      <Board shapes={shapes} />
    </div>
  );
}
