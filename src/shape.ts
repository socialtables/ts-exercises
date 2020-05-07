export interface Shape {
  readonly kind: ShapeKinds;
  x: number;
  y: number;
  thing?: unknown;
  hidden: true | false;
  [key: number]: string;
}

export enum ShapeKinds {
  Circle,
  Triangle,
  Rectangle,
  Cross,
  Donut,
  Diamond
}
