
import { Shape, ShapeKind } from "./e01";

describe("exercise 01 tests", () => {
	test("should be able to define some shapes", () => {
		const shapes: Shape[] = [
			{ kind: ShapeKind.Circle, radius: 10},
			{ kind: ShapeKind.Rectangle, height: 10, width: 10 }
		];
		expect(shapes).toBeDefined()
		expect(shapes[0]).toHaveProperty("radius");
		expect(typeof shapes[0]["radius"]).toBe("number");
		expect(shapes[1]).toHaveProperty("height");
		expect(typeof shapes[1]["height"]).toBe("number");
	});
});