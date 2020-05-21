import nock from "nock";
import superagent from "superagent";
import { GameState } from "./lib/schema-types";
import schema from "./lib/schema.json";
import gamestate from "./lib/gamestate.json";
import Ajv from "ajv";
const ajv = new Ajv();
export const validate = ajv.compile(schema);

function isGameState(maybeState: unknown): maybeState is GameState {
	return validate(maybeState) as boolean;
}

describe("exercise 4 - code generating from schema", () => {
	test("deserialize from the web", async () => {
		nock("http://fake-api")
			.post("/echo")
			.reply(201, (uri, requestBody) => requestBody);

		const {body: data } = await superagent.post("http://fake-api/echo")
			.send(gamestate);

		expect(data).toBeDefined();
		if (isGameState(data)) {
			expect(data).toBeDefined();
			//intellisense is better here than with the json object
			data?.cards?.forEach(c => {
				expect(c.shape).toBeDefined();
			})
		}
	});
});