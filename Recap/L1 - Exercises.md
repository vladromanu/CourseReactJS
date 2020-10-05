1. Write a function that concatenates two arrays by using spread operator.

```
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
const arr4 = [...arr3, 7, 8, 9];
```

2. Write a function that concatenates two objects by using spread operator.

```
const bookingBasic = { BookingReference: 'HTL-AE2-10031', BookingDate: '2020-10-05 16:00:00' };
const paymentDetails = { CustomerPayable: 105.50, SupplierPayable: 100.00 };

const booking = {...bookingBasic, ...paymentDetails};
```

3. Write a JavaScript program to reverse the order of the characters in the string.

```
const s = "abracadabra";
let reverse = s.split("").reverse().join("");
```

4. Write a lambda function that takes two aguments, one specifying a name and the second one specifying a course name, and displays "Hello, [name] ! Welcome to the first class of the course [courseName]".

5. Write a function called getFruits that accepts three arguments and displays a text like: Fruits: Lime, Orange and Kiwi. Call the function and provide its arguments by spreading the values of an already defined array.

6. Write a JavaScript program to capitalize the first letter of every word in a string. Words are delimited by space.

7. Write a JavaScript program to create an object composed of the properties the given function returns falsey for. The function is invoked with two arguments: (value, key)

8. Write a JavaScript program that takes a predicate and array, like Array.filter(), but only keeps x if pred(x) === false.

9. Write a JavaScript program to redirect to a specified URL

10. Write a JavaScript program to chunk an array into smaller arrays of a specified size.

11. Write a JavaScript program to get the first key that satisfies the provided testing function. Otherwise return undefined.

12. Write a JavaScript program to parse an HTTP Cookie header string and return an object of all cookie name-value pairs.

    https://jsonplaceholder.typicode.com/posts returns a JSON-formatted response containing a list of blog posts. Make use of fetch API in order to call this endpoint and dynamically create an HTML list which is then appended to the body of the DOM. The list should display the title and content of each post.
