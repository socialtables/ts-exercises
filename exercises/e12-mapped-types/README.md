# Mapped Types

A lot of time we want to deal with variations of existing types we already have.  Mapped types allows us to take the type information from a type and map it to a new type.  Using this we can create readonly, partial, and other variants of types we're working with. 

## Exercise
Look at the test file.  We want to test making an immutable snapshot of our gamestate and then applying a patch of a partial state.
Right now everything uses the GameState type which is causing a type-error and a hidden run-time error.  Create types GameStateSnapshot and GameStatePartial to make our test type-safe.

## Reading
https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types