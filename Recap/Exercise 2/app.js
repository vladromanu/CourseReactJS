const add = (a, b) => a + b; // added 
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const double = a => a * 2;

function chain(args) {

    // construct a new object with a value prop
    const obj = function (x) {
        this.value = x;
    }

    // return the output value
    obj.prototype.execute = function () {
        return this.value;
    }

    // foreach given input function make a new wrapper on that function 
    Object.keys(args).forEach(function (idx) {

        // fetch the given function
        var fn = args[idx];

        // define a new one with the return of the new object
        obj.prototype[idx] = function () {

            // get the parameters arguments no matter how many they are
            var newArgs = [].slice.call(arguments);

            // if there is a current value then 
            if (this.value != null) {
                // it means we need to reduce all the values to one 
                var val = newArgs.reduce((sum, current) => sum + current, 0);

                // add the prev value as the first element
                newArgs.unshift(this.value);
            }

            // Return a new object with the new params
            return new obj(fn(...newArgs));
        }

    });

    return new obj(null);

}

const c = chain({ sum, add, subtract, double });

let x = c.sum(5, 3).double().subtract(10).execute(); // 6
console.log(x);

x = c.subtract(10, 5).double().double().add(22).execute(); // 42
console.log(x);