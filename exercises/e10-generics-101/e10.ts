export enum ShapeKind {
	Rectangle = "Rectangle",
	Circle = "Circle"
}

export enum CardinalDirections {
	North,
	West,
	Central,
	East,
	South
}

type Position<T1, T2> = [T1, T2]

export interface Shape {
	kind: ShapeKind;
}

export interface Rectangle extends Shape {
	kind: ShapeKind.Rectangle;
	height: number;
	width: number;
}

export interface Circle extends Shape {
	kind: ShapeKind.Circle;
	radius: number;
}