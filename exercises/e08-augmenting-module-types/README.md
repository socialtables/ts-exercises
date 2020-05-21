# Augmenting Module Types

It's possible you'll find that the types from a module out of your control are out of date or just plain wrong. It is also possible that you may want to modify a type based on something you yourself have added. In these cases we can augment the types ourself. (Although in the first case you should really consider PRing the library or the DefinitelyTyped package).

1. Let's look at the test `e08.test.ts` and note the typescript errors.  The express types know nothing about our monkeypatched context even though this is a fairly standard pattern.
2. Augment the express module by adding a global declaration in our `global.d.ts` file.  Following the express types documentation:
https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/express-serve-static-core/index.d.ts
```declare global {
    namespace Express {
        // These open interfaces may be extended in an application-specific manner via declaration merging.
        // See for example method-override.d.ts (https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/method-override/index.d.ts)
        interface Request { }
        interface Response { }
        interface Application { }
    }
}```

## Reading
https://www.typescriptlang.org/docs/handbook/declaration-merging.html
https://dev.to/kwabenberko/extend-express-s-request-object-with-typescript-declaration-merging-1nn5