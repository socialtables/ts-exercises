import Ajv from "ajv";

const ajv = new Ajv();

const schema = {
	title: "GameState",
	description: "Game state for the Memory game",
	type: "object",
	properties: {
		cards: {
			type: "array",
			items: {
				type: "object",
				properties: {
					x: { type: "number" },
					y: { type: "number" },
					shape: {
						type: "object",
						properties: {
							"kind": { type: "string" }
						}
					}
				},
				required: ["x", "y", "shape"]
			}
		}
	}
}

export const validate = ajv.compile(schema);