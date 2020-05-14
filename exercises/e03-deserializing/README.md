# Exercise 3 - Deserializing to Typescript

This exercise builds on the kinds of typeguard functions we covered in exercise 2.  Those might have felt a little weird at first but it gave us a powerful way to convert any arbitrary data to a typescript typed object. We'll be extending that concept with some json schema validation via AJV.

## File Notes
----------
We have two extra files to look at this time:
1.  `/lib/gamestate.json` - which contains a serialized json file with our gameboard
2. `/lib/schema.ts` - this has an ajv schema written out that matches our gamestate and exports

## Tasks
------
1. Write a typeguard function that uses ajv validation to do a type conversion from arbitrary javascript data (see the tests for examples of data coming from outside the program)
2. Write some extra assertions in those tests in order to get a feel for the intellisense support in various places
3. Investigate why the visualGameState function isn't printing anything and fix it. (Hint: our enum could be improved to support the serialization)


## Reading:
-------
(review): Typeguards: https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
AJV: https://ajv.js.org/


