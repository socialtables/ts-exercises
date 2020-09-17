Decorators - Real World
========================

Last time we just covered the different types of decorators that could exist (Property, Method, Argument, Class).

Today we're going to to some real world-ish usage with an express api.

We discussed that decorators are good for cross-cutting concerns.  As it happens, node api projects tend to have a lot of those, including but not limited to:
- Http handling
- Logging 
- Authentication
- Validation
We'll be doing all of these today.

You could also implement
- Domain entities
- Role based authorization
- swagger doc generation

Live-Coding Exercises
---------------------
1. Create a route decorator that sets up an express route given the method (string, get|post|del etc) and the path (string), add it to all the methods in the ApiRoutes class.
2. Create a log decorator that logs the path and method every time a route is hit, add it to all the methods in the ApiRoutes class.
3. Create an authenticate decorator that takes an api key argument and checks the header against that argument, add it to the GET and POST routes for /user
4. Create a validation decorator that takes an ajv validate function and checks the body against it, add it to the POST /user route
5. Use the reflect-metadata module to add a name to our apiServer class and then print out the name when we start the server 

Reading
--------
https://www.typescriptlang.org/docs/handbook/decorators.html
Watch "Creating and Using Typescript Decorators" in pluralsight

