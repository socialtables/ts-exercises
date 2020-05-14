import nock from "nock";
import superagent from "superagent";
import { validate } from "./lib/schema";
import { GameState, ShapeKind } from "./e03";
import gamestate from "./lib/gamestate.json";

describe("exercise 3 - deserializing", () => {
	test("test our ajv schema", () => {
		const validatedState = validate(gamestate);
		expect(validatedState).toEqual(true);
	});

	test("deserialize from json", () => {
		function visualGameState(state: GameState) {
			//we get better intellisense here for some reason
			const stateString = [];
			state.cards.forEach(c => {
				if (c.shape.kind == ShapeKind.Rectangle) {
					stateString.push("◻️");
				}
				else if (c.shape.kind == ShapeKind.Circle) {
					stateString.push("⚪");
				}
			});
			console.log(stateString.join("  "))
		}

		/*if (isGameState(gamestate)) {
			visualGameState(gamestate);
			gamestate.cards.forEach(c => {
				expect(c).toBeDefined();
				//implement more expect statements and note the not quite awesome intellisense;
			});
		}*/
	});
	
	test("deserialize from the web", async () => {
		nock("http://fake-api")
			.post("/echo")
			.reply(201, (uri, requestBody) => requestBody);

		const {body: data } = await superagent.post("http://fake-api/echo")
			.send(gamestate);

		expect(data).toBeDefined();
		//there's no intellisense here about our data, typescript knows literally nothing
		/*if (isGameState(data)) {
			expect(data).toBeDefined();
			//intellisense is better here than with the json object
			data.cards.forEach(c => {
				expect(c.shape?.kind).toBeOneOf([ShapeKind.Circle, ShapeKind.Rectangle])
			})
		}*/
	});
});