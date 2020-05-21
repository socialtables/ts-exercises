import { compile, compileFromFile } from "json-schema-to-typescript";
import { promises as fs } from "fs";

async function generate(): Promise<void> {
	const compiledSchema = await compileFromFile(__dirname + "/schema.json");
	return fs.writeFile(__dirname + "/schema-types.ts", compiledSchema);
}

async function generateFromJS(): Promise<void> {
	const compiledSchema = await compile({
		"title": "GameState",
		"description": "Game state for the Memory game",
		"type": "object",
		"properties": {
			"cards": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"x": { "type": "number" },
						"y": { "type": "number" },
						"shape": {
							"type": "object",
							"properties": {
								"kind": { "type": "string" }
							}
						}
					},
					"required": ["x", "y", "shape"]
				}
			}
		}
	}, "GameState");
	return fs.writeFile(__dirname + "/schema-types.ts", compiledSchema);
}

generate();