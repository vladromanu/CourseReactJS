## My JS Fiddle Solution

https://jsfiddle.net/y6zv5cp8/238/

## Exercise #2

Create a chain function that allows a bunch of functions to be chained together and to be used in a more functional programming fashion. The chain function accepts an object containing all the chainable methods as an argument and returns an object that allows us to chain the method calls. The result of the chain of functions is retrieved using the execute method.

Chained functions receive an arbitrary number of arguments. The first function in the chain receives all its arguments. In the other functions, the first argument is the result of the previous function and then it only receives the remainder arguments (second, third, etc.).

The chain function should work with other custom defined functions, not with only the ones provided in the example below.

```
const sum = (a,b) => a + b;
const subtract = (a, b) => a - b;
const double = a => a * 2;

function chain() {

}

const c = chain({sum, add, subtract, double});

let x = c.sum(5,3).double().subtract(10).execute(); // 6
console.log(x);

x = c.subtract(10,5).double().double().add(22).execute(); // 42
console.log(x);
```
