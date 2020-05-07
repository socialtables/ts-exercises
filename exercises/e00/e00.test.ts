import "./e00.ts";

describe("exercise 00 tests", () => {
	test("should be able to define some cards", () => {
		const cards: unknown[] = [
			{ x: 2, y: 2, hidden: true, kind: "rectangle" },
			{ x: 3, y: 3, hidden: true, kind: "diamond" }
		];
		expect(cards).toBeDefined()
		expect(cards[0]).toHaveProperty("x");
		expect(typeof cards[0]["x"]).toBe("number");
	});
})