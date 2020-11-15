// Make a function that will return any given string into all caps followed by the same string all lowercase

function upperAndLowerCase (string) {
    console.log(string.toUpperCase() + string.toLowerCase())
}
var myString = upperAndLowerCase ("This is cool ")


// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().


function halfLength(string) {
    console.log(Math.floor(string.length / 2));
}
var myStr = halfLength("num 4")


// Make a function that uses slice() and the other functions you've written to return the first half of the string.

function firstHalf(string) {
    console.log(string.slice(0, string.length / 2));
}

var myStr2 = firstHalf ("This one can be confusing");

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the 
// string length is odd, capitalize the shorter of the first half.)

function firstHalfCaps (str) {
    var halfCap = (str.length / 2);
    var firstHalf = str.slice(0, halfCap);
    var secondHalf = str.slice(halfCap);
    var results = firstHalf.toUpperCase() + secondHalf.toLowerCase();
    console.log(results);
}
var greeting = firstHalfCaps ("You Rock");

