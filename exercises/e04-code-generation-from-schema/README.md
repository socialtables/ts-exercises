# Exercise 4 - Type generation from schema

In this exercise we're going to play with generating our types from an already defined JSON schema. This could be useful when converting existing node programs that use JSON schema to TS.

## File Notes
-----
1. our `gamestate.json` file is back representing our game board's state.
2. `lib/schema.json` is the same json schema we used before but in a json format.
3. `lib/generate-type-from-schema.ts` is a script you can run with ts-node, command would be (in the root): `npx ts-node ./exercises/e04-code-generation-from-schema/lib/generate-type-from-schema.ts`.  This generates a `schema.ts` file

## Exercises
-----
1. fill out the generate function in `lib/generate-type-from-schema.ts`,  the goal being to write a `schema.ts file` that will take the place of our types
2. Look at the schema.ts file and look for ways to make it closer to our hand-written type. Two possible examples could be trying to eliminate any uneccesary properties and trying to make the kind property closer to what we want by making it a union of strings...

## Reading
------
json-schema-to-typescript (npm): https://www.npmjs.com/package/json-schema-to-typescript
blog post w/ opinion on approach: https://spin.atomicobject.com/2018/03/26/typescript-data-validation/

## More advanced tools (not sure how good or applicable)
swagger-to-ts: https://github.com/manifoldco/swagger-to-ts
io-ts: https://github.com/gcanti/io-ts/blob/master/Schema.md
purify-ts: https://gigobyte.github.io/purify/utils/Codec
