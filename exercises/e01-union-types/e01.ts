/*
Intro:
	So let's talk about the shapes we want to draw on these cards
Exercise:
	Type "Shape" is missing, please define it and use
	it in shapes array in the test.
*/

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

// Tips and tricks
// note that in more recent versions of typescript you can export and import types as we are doing here with ShapeKind

// Reading:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types
