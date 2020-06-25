export type Shape = Rectangle | Circle | Diamond;

export enum ShapeKind {
	Rectangle = "rectangle",
	Circle = "circle",
	Diamond = "diamond"
}

export interface Rectangle {
	kind: ShapeKind;
	height: number;
	width: number;
}

export interface Circle {
	kind: ShapeKind;
	radius: number;
}

export interface Diamond {
	kind: ShapeKind;
	height: number;
	width: number;
}

export interface Card {
	x: number;
	y: number;
	shape: Shape;
}

export type GameTime = string;

export interface GameState {
	cards: Card[];
	turnCount: number;
	startTime?: GameTime;
	endTime?: GameTime;
}