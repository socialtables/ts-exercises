import { compile, compileFromFile } from "json-schema-to-typescript";
import { promises as fs } from "fs";

async function generate(): Promise<void> {
	const compiledSchema = "";
	return fs.writeFile(__dirname + "/schema-types.ts", compiledSchema);
}

async function generateFromJS(): Promise<void> {
	const compiledSchema = "";
	return fs.writeFile(__dirname + "/schema-types.ts", compiledSchema);
}

generate();