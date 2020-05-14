type Shape = Rectangle | Circle;

export enum ShapeKind {
	Rectangle,
	Circle
}

interface Rectangle {
	kind: ShapeKind;
	height: number;
	width: number;
}

interface Circle {
	kind: ShapeKind;
	radius: number;
}

interface Card {
	x: number;
	y: number;
	shape: Shape;
}

export interface GameState {
	cards: Card[];
}