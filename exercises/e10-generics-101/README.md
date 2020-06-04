# Generics 101

Generics is a type construct that allows us to make types more dynamically, and write functions, and type structures that can be of multiple types.  The best built in example I can think of is an array.  In javascript array elements can be of

1. Rewrite the identity function to a generic function instead of taking any. 

2. Write a generic interface for a key, value collection called Dictionary where the keys are strings but you don't know the types of the values.

2. Let's say we have a three by three grid. Write two interfaces, MapShape and GridShape.  MapShape will have a position property that is determined by a tuple w Cardinal Directions enum, and GridShape will have a position property with a tuple of numbers representing grid coordinates.

NW  NC  NE     0,0  0,1  0,2
WW  CC  EE     1,0  1,1  1,2
SW  SC  SE     2,0  2,1  2,2

3. Generic Constraints

Write a generic function called printShape taking any type that extends Shape and return a string representing the shape.

## Reading
https://www.typescriptlang.org/docs/handbook/generics.html
https://www.typescriptlang.org/docs/handbook/generics.html#generic-constraints
