import { Dictionary, MapShape, GridShape, CardinalDirections, Shape, ShapeKind, Rectangle } from "./e10";

describe("exercise 10 - generics 101", () => {
    test("1. identity function", () => {
        function identity(thing: any): any {
            return thing;
        }

        const pi = 3.1415926;
        const foo = "bar";
        
        expect(identity(pi).toFixed(4)).toEqual("3.1416");
        expect(identity(foo).toUpperCase()).toEqual("BAR");
    });


    test("2. generic dictionary", () => {
        const stringDictionary: Dictionary<string> = {
            "A": "A",
            "B": "B"
        };

        type Thing = {
            name: string;
            definition: string;
        }
        const thingDictionary: Dictionary<Thing> = {
            Cardinal: { name: "Cardinal", definition: "A red bird."},
            Dogwood: {name: "Dogwood Tree", definition: "State tree of Virginia."}
        }

        expect(stringDictionary["A"].toLowerCase()).toEqual("a");
        expect(thingDictionary.Cardinal.name).toEqual("Cardinal");
    });

    test("3. MapShape and GridShape", () => {
        const mapShape1: MapShape = {
            kind: ShapeKind.Circle,
            position: [CardinalDirections.North, CardinalDirections.West]
        }

        const gridShape1: GridShape = {
            kind: ShapeKind.Circle,
            position: [0, 2]
        }

        expect(mapShape1.position[0]).toEqual(CardinalDirections.North);
        expect(gridShape1.position[0]).toEqual(0);
    });

    test("4. Generic shape printer", () => {
        const mapShape1: MapShape = {
            kind: ShapeKind.Circle,
            position: [CardinalDirections.North, CardinalDirections.West]
        }

        const gridShape1: GridShape = {
            kind: ShapeKind.Circle,
            position: [0, 2]
        }

        const rectangle1: Rectangle = {
            kind: ShapeKind.Rectangle,
            height: 10,
            width: 10
        }

        function printShape(shape: any): string {
            return `${shape.kind.toString()}`;
        }

        expect(printShape(mapShape1)).toEqual("Circle");
        expect(printShape(gridShape1)).toEqual("Circle");
        expect(printShape(rectangle1)).toEqual("Rectangle");
    });
});