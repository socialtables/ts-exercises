<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Gradually Converting Node Servers to Typescript](#gradually-converting-node-servers-to-typescript)
  - [Caveat Emptor](#caveat-emptor)
  - [Tasks](#tasks)
  - [Reading/Links](#readinglinks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Gradually Converting Node Servers to Typescript

## Caveat Emptor

This is just one possible way to convert a server to typescript. Feel free discuss with your team and go a different route.

## Tasks

1. Install typescript, create a tsconfig with allowJs
   a. install ts compiler: `npm install --save-dev typescript`
   b. init a tsconfig: `npx tsc --init`
   c. set some config values
   - allowJs (and maybe checkJs if you have some good JSdoc going on)
   - rootDir
   - outDir
   - strict (turn off)
   - target (node 10 can handle es2018)
   - include (add the src dir)
     d. Make a build script
2. Shuffle folder structure to acommodate a build step while maintaining a good entrypoint
   - find a logical entrypoint
   - rename server to src (slap vscode's hand if it tries to edit your files)
   - adjust anything pointing at your chosen entrypoint to point at your output folder
3. gitignore the output folder (eslint should also respect this...)
4. Convert our routes file to typescript
   a. We can codemods to transform to es6 imports/exports.
   - install 5to6 codemods as a dev dependency: `npm install --save-dev 5to6-codemod`
   - run the cjs codemod on our src files: `npx jscodeshift -t node_modules/5to6-codemod/transforms/cjs.js ./src`
   - run the exports codemod on our src files: `npx jscodeshift -t node_modules/5to6-codemod/transforms/exports.js ./src`
     b. rename the routes file to .ts and fix anything pointing at a ".js" (there is a lint rule for this)
     c. get definitions from DefinitelyTyped
     b. adjust your entrypoint to use `.default` from your modules, because typescript won't do module.exports for node (At least I didn't see the option)
5. Everything should be good, `npm run validate`, make adjustments as needed, and smoketest!

## Reading/Links

https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html
https://www.twilio.com/blog/move-to-typescript
5to6 CodeMods (cjs and exports transforms) https://github.com/5to6/5to6-codemod
