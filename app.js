/*
FOUR RULES OF BIG O:
1. WORST CASE: Write code for the worst case scenario.
The value we are looking for is at the end of the array O(n)
2. REMOVE CONSTANTS
3. DIFFERENT TERMS FOR INPUTS
4. DROP NON-DOMINANTS
    O(x^2+3x+100+x/2) => O(x^2) => O(n^2) Quadratic Time
    O(n^3) => cubed => Terrible Scaling Terrible Big O

TIP: 
    if two for loops are on the same indentation, it is O(n + m)
if a for loop is within a for loop, it is O(n * n)


DATA STRUCTURES + ALGORITHMS = PROGRAMS
    Data Structures: Ways to store data
    Algorithms: Ways to use data structure

3 PILLARS OF CODE: There's a trade-off between Space and Time Complexity
    Readable: Maintainable clean code
    Memory: Space Complexity
    Speed: Time Complexity


HOW A PROGRAM EXECUTES:
    HEAP: Where we store variables
    STACK: keeps track of function calls

CAUSES OF SPACE COMPLEXITY: 
    Variables, Data Structures, Function Call, Allocations


HOW TO SOLVE CODING PROBLEMS: 
    Fundamental question: will you solve the company's problem?
    An interviewer wants to hear your thought process and what tradeoffs between data structures and algorithms, space and time complexity

WHAT ARE COMPANIES LOOKING FOR?
    Analytic Skills - how you think out the process from not knowing to solution
    Coding Skills - code clean, well organized, readable, scalable
    Technical Skills - do you know code fundamentals
    Communication Skills - does your personality match and can you work well with others?

DATA STRUCTURES: 
    Arrays, Stacks, Queues, Linked Lists, Treet, Tries, Graphs, Hash Tables

ALGORITHMS: 
    Sorting, Dynamic Programming, BFS + DFS(Searching), Recursion

SPACE COMPLEXITY: 
    O(a + b) Time Complexity
    O(a) Space Complexity

    if we are not adding variables and are just iterating over via loops aka using the data inherent, it is O(n)

*/

// =========================  O(n) ==================================

/* 
Big O Notation: O(n) => loops over each box one by one
Time Complexity: Linear Time
*/

const everyone = [
  "dory",
  "bert",
  "nemo",
  "hank",
  "edward",
  "dani",
  "kate",
  "vishnu",
];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    // console.log("running");
    if (array[i] === "nemo") {
      //   console.log("Found NEMO!");
      break;
    }
  }
}

findNemo(everyone);

// Example 2:

const boxes = [1, 2, 3, 4, 5];

function compressAllBoxes(boxes) {
  boxes.forEach((box) => {
    // console.log("O(n) loops through all:", box);
  });
}

compressAllBoxes(boxes);

// ========================= O(1) ==============================

// Big O Notation: O(1)
// Time Complexity: Constant Time

const boxes2 = ["a", "b", "c", "d"];
function compressFirstBox(boxes2) {
  //   console.log("O(1) only grabs first:", boxes2[0]);
}

compressFirstBox(boxes2);

// Big O Notation: O(2) => O(1);
// Time Complexity: Constant Time

const boxes3 = [0, 1, 2, 3, 4, 5];
function logFirstTwoBoxes(boxes3) {
  //   console.log(boxes3[0]); // O(1)
  //   console.log(boxes3[1]); // O(1)
}

logFirstTwoBoxes(boxes3);

// ======================== O(n + m) ===============================

// Big O evaluations how many operations are happening...
// Big O Notation: O(1 + n/2 + 100) => O(n);
// Drop constants: O(n/2 + 100) => O(n + 1) => O(n)
// Time Complexity:

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  //   console.log(items[0]); // O(1)

  let middleIndex = Math.floor(items.length / 2); // O(n/2)
  let index = 0;

  while (index < middleIndex) {
    // console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    // console.log("hi");
  }
}

// Example 2: O(2n) => O(n) => 2 operations singular actions each seperate
// Time Complexity: Linear Time

const compressBoxesTwice = (boxes) => {
  //   console.log("two seperate for loops");
  boxes.forEach((boxes) => {
    // console.log("for loop 1: ", boxes);
  });

  boxes.forEach((boxes) => {
    // console.log("for loop 2: ", boxes);
  });
};

compressBoxesTwice(boxes);

// Example 3:
// Big O => O(n + m)
// boxes 1 + boxes 2

// const compressBoxesTwiceStill = (boxes, boxes2) => {
//   boxes.forEach((boxes) => {
//     console.log(boxes);
//   });

//   boxes2.forEach((boxes) => {
//     console.log(boxes);
//   });
// };

// compressBoxesTwiceStill(boxes);

// ======================== O(n^2) ======================================
// Big O Notation: O(loop * loop) => O(n ^ 2)
// Time Complexity: Quadratic Time =>
// 2 elements by 2 elements = 4 operations
// 3 elements squared is 3 * 3 = 9 operations
// A lot of interview questions ask us to convert from quadratic time to something faster

const boxes_ = ["a", "b", "c", "d"];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      //   console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes_);

// Example 2:

function logAllPairsOfBoxes(boxes) {
  boxes.forEach((firstBox) => {
    boxes.forEach((secondBox) => {
      //   console.log(firstBox, secondBox);
    });
  });
}

logAllPairsOfBoxes(boxes_);

// Example 3:
// O(n + n^2) => drop non dominant terms(n) aka keep the most important term => O(n ^ 2)

// const numbers = [1, 2, 3, 4];

function printAllNumbersThenAllPairSums(numbers) {
  //   console.log("these are the numbers:");
  numbers.forEach((number) => {
    // console.log(number);
  });

  //   console.log("and these are their sums:");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      //   console.log("pairing:", firstNumber, secondNumber);
      //   console.log("sum of each pairing:", firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([10, 20, 30, 40, 50]);

// ======================== O(n!) =================================

// Big O(n!): Adds a nested loop for every element/input
// Time Complexity: Factorial Time

// ================================================

// Time Complexity: O(n)
// Space Complexity: O(1)

function boo(n) {
  for (let i = 0; i < n.length; i++) {
    // console.log("boo");
  }
}

boo([1, 2, 3, 4, 5]);

// Example 2:
// Space Complexity: O(n) => n has no limit so the input can be infinite

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayOfHiNTimes(6);

// ===================== Twitter Exercise  ===================

// Find 1st, Find Last Nth item
const tweets = [
  {
    tweet: "hi",
    date: 2012,
  },
  {
    tweet: "my",
    date: 2014,
  },
  {
    tweet: "teddy",
    date: 2018,
  },
];
// O(n ^ 2) // Nested Loops checking nested objects in the Array

tweets[0]; //O(1) // oldest tweets
tweets[tweets.length - 1]; // O(1); // latest tweet

"dakfjdksajfkdjafkjdkfajkdfjsd".length; // O(1)
// The Big O of this simple exercises depends on how the language is built
// JS has length built in. so it is a simple look up

// ========================= JS LOOPS =============================

// FOR EACH LOOP
const findNemo2 = (array) => {
  array.forEach((fish) => {
    if (fish === "nemo") {
      console.log("found nemo");
    }
  });
};

// FOR OF LOOP
const findNemo3 = (array) => {
  for (let fish of array) {
    if (fish === "nemo") {
      console.log("found nemo");
    }
  }
};

findNemo2(everyone);
findNemo3(everyone);

// =====================================================

/* Interview Question: Check if two arrays have any matching common items

given 2 arrays [] [] 
create a function () {}
alert true yes these two arrays contain common items
alert false no these two arrays !contain common items
*/

/* 

ask will they always be arrays?
is it possible the input might not be an array?

2 params no size limit
return boolean

it is not the best because the big O notation is quadratic time.  

HASH TABLES ARE A COMMON WAY TO MAKE THINGS FASTER.
*/

const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "i"];

function isMatching(arr1, arr2) {
  //   quadratic O(n ^ 2)
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

/* BETTER SOLUTION: hash map/object

     arr1 => object {
        a: true,
        b: true,
        c: true,
        x: true
    }

    see if arr2[index] === obj.properties

    this way you simply have to loop over one array instead of 2 arrays and check it against a hash map

*/

const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "i"];

// what if you have two of the same values
// what if you have an [], null in the array
// what if there's only one array?
// have fun breaking the code and think of all errors
// think about meaningful naming conventions
// how can you test this function if it is not tested with two arrays? like a user object and an items array
// where would you improve the code? what would you google?
// how could you make the code more readable?
// tell the user that you would google specific array methods in order to do that exact same things
// tell them how you would modularize the code
function containsCommonItem(arr1, arr2) {
  // loop thru first array and create hash map where props === items in the array
  let map = {}; // container
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      // if map a doesn't exist, lets create it
      const item = arr1[i]; // a
      map[item] = true;
    }
  }
  console.log(map);

  // loop thru second array and check if item in second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

containsCommonItem(arr1, arr2);
// what if you pass 0 here instead of arr2?
// learn a little bit about testing and how that would interact in the mix

// clean readable code: GOAL TO STRIVE FOR

const arr3 = ["a", "b", "c", "x"];
const arr4 = ["z", "y", "i"];

const containsCommonItems3 = (arr3, arr4) =>
  arr3.some((item) => arr4.includes(item));

// MODULARIZED VERSION:

// function containsCommonItem(arr1, arr2) {

//     mapArrayToObject(arr1) {
//         let map = {};
//         for (let i = 0; i < arr1.length; i++) {
//           if (!map[arr1[i]]) {
//             const item = arr1[i];
//             map[item] = true;
//           }
//         }
//         console.log(map);
//     }

//     compareArrayToObject() {
//         for (let j = 0; j < arr2.length; j++) {
//             if (map[arr2[j]]) {
//               return true;
//             }
//           }
//     }

//     return false;
//   }

// ============================================

// Naive: Quadratic Time O(n^2) very slow nested for loops
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

hasPairWithSum([6, 4, 3, 2, 1, 7], 9);

// Better:

function hasPairWithSum2(arr, sum) {
  const mySet = new Set(); // Unique can't have duplicates
  const len = arr.length; // variable len stands for the arr length

  for (let i = 0; i < len; i++) {
    // for loop over the len variable array length
    if (mySet.has(arr[i])) {
      // checks if the set has the iteration of the array
      return true;
    }
    mySet.add(sum - arr[i]); // if the set does have... ????
  }
  return false;
}

hasPairWithSum2([6, 4, 3, 2, 1, 7], 9);
