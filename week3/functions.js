// Write a function that accepts two numbers as parameters, and returns the sum

function sum (num1, num2) {
    return num1 + num2
}
var results = sum(5, 8)
console.log(results)


// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function largest (num1, num2, num3) {
    var max = Math.max (num1, num2, num3);
    return max;
}

var result = largest(5, 15, 7)
console.log(result)


//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd")

var num = 15
if (num % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}


// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the
// string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

function myFunction (string) {
    if (string.length <= 20) {
        console.log (string + " " + string);
    } else if (string.length > 20) {
        console.log (string.slice(0, string.length /2))
    }
}
 var myResults = myFunction ("JavaScript is pretty awesome to learn and what a Challenge!")


/* Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.

The first numbers are:

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

So if n were 6, the sum of 1+1+2+3+5+8 would be 20

Don't hardcode the sequence.*/

// I struggled with this one. I could not figure this one out. I am sorry



 // Write a function that accepts a string as a parameter. Return the most frequently occurring letter in that string. (White spaces count as a letter) */

var exp = 'This is Awesome' ;
var expCount = {};
var maxChar = '';
for(var i = 0; i < exp.length; i++)
{
    var char = exp[i];
    if(!expCount[char]){
     expCount[char] = 0;
    }
    expCount[char]++;
    if(maxChar == '' || expCount[char] > expCount[maxChar]){
        maxChar = char;
    }
}

console.log(maxChar);