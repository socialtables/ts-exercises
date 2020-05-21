import myId from "./lib/myid";
import shortId from "shortid";

describe("exercise 6 - how does typescript find types", () => {
	test("basic id generation with myid", () => {
		const id = myId.generate();
		expect(id).toBeDefined()
	});

	test("basic id generation with shortid", () => {
		const id = shortId.generate();
		expect(id).toBeDefined()
	});
});