/*
Intro:
	Okay so we have a generic shape type.  What if we want to handle different shapes differently?
	We need to learn about type guards.
Exercise:
	Open the test for this exercise and make different expectations for a Rectangle vs a Circle in a few different ways
	1. write an isCircle function to type guard check with a type predicate
	2. use the in operator to narrow a type by checking for a property
	3. use a typeof guard to check for a type
	
*/

export type Shape = Rectangle | Circle;

export enum ShapeKind {
	Rectangle,
	Circle
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

// Notes
// 1. we skipped the instanceof check but it's worth looking at

// Reading:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types