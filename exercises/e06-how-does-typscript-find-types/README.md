# How does typescript find types for modules?

We live in a world where not everything is written in typescript, but many of the most popular npm modules generate type file or have types maintained for them at https://github.com/DefinitelyTyped/DefinitelyTyped. Let's peek under the hood and see how Typescript handles finding type information. Hopefully, this will help us debug compiler errors as we use Typescript more extensively and are froced to interact with Javascript modules.


## Exercise
1.  Note the two imports in `e06.test.ts`  one is relative and one is not.
2.  Let's see how typescript resolves relative imports with the command `npx tsc --noemit --traceResolution | grep myid`
3. Let's test how typescript resolves non-relative imports with the command `npx tsc --noemit --traceResolution | grep myid`
4. Take a peek at our tsconfig.json and note the baseUrl and paths keys.  You can tell the compiler where to go for types explicitly. You'll note our test path appears when we use the `--traceResolution` flag.

## Reading
https://www.typescriptlang.org/docs/handbook/module-resolution.html
