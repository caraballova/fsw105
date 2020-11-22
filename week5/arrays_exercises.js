///////// Section A
// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly (arr) {
    const results = arr.filter(function(num){
        if (num >= 5) {
            return true;
        }
    });
    return results;
}
console.log(fiveAndGreaterOnly([2, 4, 6, 8, 10]))

// 2) Given an array of numbers, return a new array that only includes the even numbers.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myResult = arr.filter(function(num){
    if (num % 2 === 0){
        return true
    }
})

console.log(myResult)


// Extra Credit) Make a filtered list of all the people who are old enough to see The Matrix (17+).

const users = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2},
    { name: "Paris Hilton", age: 5},
    { name: "Kanye West", age: 16},
    { name: "Bob Ziroll", age: 100}
]

const peopleWhoCanSeeTheMatrix = users.filter(function(user) {
    if (user.age >= 17){
        return true
    }
})

console.log(peopleWhoCanSeeTheMatrix)

//////// Section B
// 1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr) {
    const dblResult = arr.map(function(num) {
        return num * 2;
    });
    return dblResult;
}
 
console.log(doubleNumbers([3, 5, 15]));

// 2) Take an array of numbers and make them strings

const numbers = [
    { number: "1" },
    { number: "2" }
]
const string = numbers.map(function(number){
    return number.number
})

console.log(string)

// 3) Capitalize each of an array of names

function capitalizeNames(arr){
    const capsResult = arr.map(function(str){
        return str[0].toUpperCase() + str.slice(1).toUpperCase();
    });
    return capsResult;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// Extra Credit 1) Make an array of strings of the names

function namesOnly(arr){
    const nameResult = arr.map(function(name){
        return name.name
    });
    return nameResult;
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// Extra Credit 2) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr){
    const stringResults = arr.map(function(string){
        if (string.age >= 17) {
            return string.name + " can see The Matrix";
        } else {
            return string.name + " can not see The Matrix";
        }
    });
    return stringResults;
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

//////////// Section C
// 1) Turn an array of numbers into a total of all the numbers

function total(arr){
    const totalResult = arr.reduce(function(num, finalSum){
        finalSum = finalSum + num;
        return finalSum
    });
    return totalResult;
}
console.log("Total of All Numbers: " + total([2, 8, 10]));

// 2) Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr){
    const concatResult = arr.reduce(function(final, num){
        return final.toString() + num.toString();
    });
    return concatResult;
}

console.log(stringConcat([1, 2, 3, 4, 5, 6]))

// 3) Turn an array of voter objects into a count of how many people voted

var voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false},
];

const voteCount = voters.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final
}, 0)

console.log(voteCount)

// Extra Credit 1) Given an array of all your wishlist items, return the total cost of all items

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(arr){
    return arr.reduce(function(final, item){
        final += item.price;
        return final;
    }, 0)
};

console.log(shoppingSpree(wishlist));

// Extra Credit 2) Given an array of arrays, flatten them into a single array

var arrays = [
    ["1, 2, 3"],
    [true], 
    [4, 5, 6]
];

var merge = [].concat.apply([], arrays);

console.log(merge)

////// Section D
// 1) Sort an array from smallest number to largest

function leastToGreatest(arr) {
    const result = arr.sort(function(a, b){
        return a - b
    });
    return result;
}
console.log(leastToGreatest([5, 2, 4, 8, 31, 10]));

// 2) Sort an array from largest number to smallest

function greatesToLeast(arr) {
    const result = arr.sort(function(a, b){
        return b - a
    });
    return result;
}
console.log(greatesToLeast([35, 65, 12, 5, 100, 34]));

// 3) Sort an array from shortest string to longest

function lengthSort(arr) {
    const result = arr.sort(function(a, b){
        return a.length - b.length;
    });
    return result;
};

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

// Extra Credit) Sort an array alphabetically

function alphabetical(arr) {
    const result = arr.sort((function (a, b) {
        return a.localeCompare(b);
    }));
    return result;
};

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));