/*
Intro:
	We are starting a simple memory game program for kids.  There will be cards laid out in
	a 3x4 grid, each having a shape drawn on it.
Exercise:
	1. Look at all the types!
	2. Given the data defined in the test file, define the interface "Card" and use it accordingly.
	3. Instead of the kind property being an string, create an enum with the kinds
*/

type AllTheTypes = {
	x: number;
	name: string;
	kind: ShapeKinds;
	//what: Object; // bad
	it: object; // might be ok
	thing: {}; // avoid if possible
	nested: {
		a: number;
		b: string;
	};
	foo: null;
	bar: undefined;
	anything: any;
	notSure: unknown; // safer than any
}

interface Card {
	something?: unknown;
	x: {
		a: number;
	};
}

enum ShapeKinds {
	Default
}

//  Thoughts and tips on basic types
//  unknown is preferable to any if you can get away with it https://stackoverflow.com/questions/51439843/unknown-vs-any
//  some do's and don'ts https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html 
//  especially note that Object, object, and {} are all similar but different in the way they match types


// For reading:
// https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction
// https://www.typescriptlang.org/docs/handbook/enums.html