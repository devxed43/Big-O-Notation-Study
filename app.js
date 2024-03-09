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

/* 

collection of numbers
find matching pair that is equal to sum given => 8
[1, 2, 3, 9] = 8
[1, 2, 4, 4] = 8

question: 
    so you're looking for a pair of numbers that add up to 8?
    so in this case there isn't a pair of numbers that add up to 8
    and in this case, there is a pair of numbers that do add up to 8
    so case one is no
    so case two is yes
    
    how are these numbers given? can I assume they are in memory? in an array? 
    are they in order? ascending order? descending order? 
    what about repeating elements? can the same number occur twice?
    are the numbers integers or floating points? negatives? positives?
    
    so my brute force appraoch is to compare every single possible pair
    where I can do two nested for loops where the first loop tests i and the nested loop tests j
    ofcourse this is quadratic time and is very ineffecient

    so when I have a number, I am looking for another number that will fulfill our sum request of 8
    I can do a binary search (log n) to be more efficient, a little bit better.
    oh that's still kind of slow? 
    a binary search is unidirectional,

    I can start with a pair of numbers to begin with and work my way from there in a DFS?

    so the largest possible sum will be the last two values, 
    the lowest possible sum will be the first two...

    so I can do an elimination algorithm starting at the end and rearranging the list...

    so binary search is log and it repeats for everyone element so its an n log n.
    and in this case, I just have to scan one time and then rearrange the values in the list

    so that was a non-working example, but can you explain that process in a working example?
    (explain how it works)
    

    so do I want the pair, the indices of the pair or whether I just found it or not?
    if you were going to return a pair, how could that become a problem if there was no pair?

    building the pair would be easy, you would just return the pair
    if i didn't have the pair, i'd need to return some sort of boolean
    I could make a data structure that has a boolean that denotes whethere the pair is valid or not
    
    bool hasPairWithSum(const vector<int>& data, int sum) {
        int low = 0; initializer
        int high = data.size() - 1; // handles if there are no pair the following code would not run

        while (low < high) {
            if (data[low] + data[high] == sum) { 
                return true;
            }
        }
    }

    but im actually going to store it in a variable int s.
    if ( s === sum) return true;

    so here's a change, the numbers are no longer sorted,

    so if the first thing I do is sort them, it would be still be n log n
    sorting is slow because it is linear

    hmmm okay lets restart:

    I can ask have I seen the value I need in the past? you can insert the compliment instaed of sorting

    I can use a data structure that is good for lookups like a hash table.

    do you need a kay in this case? 
    no i just need a value. 

    i need a hash set, how am i going to deal with the case of repeated elements?
    if I have two fours, stopping at the first four would be wrong
    if it adds four, and it seees four in the past, it will evaluate 

    bool hasPairWithSum(c vector<int> data, int sum) {
        unordered_set<int> comp;
        for (int value: data) {
            if (comp.find(value) != comp.end) 
            return true;
        comp.add(sum - value);
        }
        return false;
    }

    basically walk through the functionality of the function.
    what's happening
    why is it happening
    how is it happening?
    talk about issues, potentialities
    talk about the Big O Notation, the Time Complexity, Space Complexity
    what you would do differently if there were 10 million inputs, 
    ask would it fit in memory? is the range of the values limited in some way?
    you can process it in chunks, in sets, accumulate it in sets, 
    can you do it in parallel?
    multiple computers? multiple servers? sets of complements?
    how would you bulk process it? 
    make sure to process them via multiple computers in the right order
    and properly merge them


    EXTRA BITS: 
    Ask for Clarification
    Write down notes
    Think out loud constantly

*/
