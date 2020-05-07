/*
Intro:
	So let's talk about the shapes we want to draw on these cards. 
	We know we'll at least want to draw circles and rectangles. We will probably be working with arrays of things that might
	be circles and or rectangles so we need a more generic concept.
Exercise:
	Type "Shape" is missing, please try defining is as as an intersection type and then a union type.
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

// Tips and notes
// note that in more recent versions of typescript you can export and import types as we are doing here with ShapeKind
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#-type-only-imports-and-export
// when would you use interface and when would you use type https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types

// is intersection or union the best for our shape type???
// can we use an intersection type to combin the kind with the other shape properties?

// Reading:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
