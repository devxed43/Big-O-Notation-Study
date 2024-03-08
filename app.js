/*

                            FOUR RULES OF BIG O:
1. Worst Case: Write code for the worst case scenario.
The value we are looking for is at the end of the array O(n)

2. Remove Constants

3. Different terms for inputs

4. Drop Non Dominants: 

    O(x^2+3x+100+x/2) => O(x^2) => O(n^2) Quadratic Time
    O(n^3) => cubed => Terrible Scaling Terrible Big O

                                TIP: 
    if two for loops are on the same indentation, it is O(n + m)
if a for loop is within a for loop, it is O(n * n)
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
    console.log("running");
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
      break;
    }
  }
}

findNemo(everyone);

// Example 2

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

// ============================================================

// Big O Notation: O(2) => O(1);
// Time Complexity: Constant Time

const boxes3 = [0, 1, 2, 3, 4, 5];
function logFirstTwoBoxes(boxes3) {
  //   console.log(boxes3[0]); // O(1)
  //   console.log(boxes3[1]); // O(1)
}

logFirstTwoBoxes(boxes3);

// ========================  O(n + m) ===============================

// Big O evaluations how many operations are happening...
// Big O Notation: O(1 + n/2 + 100) => O(n);
// Drop constants: O(n/2 + 100) => O(n + 1) => O(n)
// Time Complexity:

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)

  let middleIndex = Math.floor(items.length / 2); // O(n/2)
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.log("hi");
  }
}

// Example 2: O(2n) => O(n) => 2 operations singular actions each seperate
// Time Complexity: Linear Time

const compressBoxesTwice = (boxes) => {
  console.log("two seperate for loops");
  boxes.forEach((boxes) => {
    console.log("for loop 1: ", boxes);
  });

  boxes.forEach((boxes) => {
    console.log("for loop 2: ", boxes);
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
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes_);

// Example 2:

function logAllPairsOfBoxes(boxes) {
  boxes.forEach((firstBox) => {
    boxes.forEach((secondBox) => {
      console.log(firstBox, secondBox);
    });
  });
}

logAllPairsOfBoxes(boxes_);

// Example 3:

// O(n + n^2) => drop non dominant terms(n) aka keep the most important term => O(n ^ 2)

// const numbers = [1, 2, 3, 4];

function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers:");
  numbers.forEach((number) => {
    console.log(number);
  });

  console.log("and these are their sums:");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log("pairing:", firstNumber, secondNumber);
      console.log("sum of each pairing:", firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([10, 20, 30, 40, 50]);

// ========================   ========================
