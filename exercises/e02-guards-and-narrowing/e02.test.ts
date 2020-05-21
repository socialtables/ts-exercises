
import { Shape, ShapeKind, Rectangle, Circle } from "./e02";


describe("exercise 02 tests", () => {
	test("should be able to define some shapes and ", () => {
		const shapes: Shape[] = [
			{ kind: ShapeKind.Circle, radius: 10},
			{ kind: ShapeKind.Rectangle, height: 10, width: 10 }
		];

		shapes.forEach(s => {
			//i want to test rectangles and circles differently, how do I do dat?
			//expect(s.radius).toBeDefined();
			//if (isCircle(s)) {
				
			//}
		})
	});
});