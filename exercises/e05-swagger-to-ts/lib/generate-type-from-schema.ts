import swaggerToTS from "@manifoldco/swagger-to-ts";
import { promises as fs } from "fs";

async function generate(): Promise<void> {
	const petStoreJson = await fs.readFile(__dirname + "/socialtables.json", "utf8");
	console.log(petStoreJson);
	const compiledSchema = swaggerToTS(JSON.parse(petStoreJson));
	return fs.writeFile(__dirname + "/schema-types.ts", compiledSchema);
}

generate();