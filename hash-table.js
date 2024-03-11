class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // HASH: hash function does a loop over the key O(1)
  _hash(key) {
    let hash = 0;
    // key is grapes // length of key is 6
    // hash or 0 equals 0 + a char code of the i iteration of the key => g
    // multipled by the index of the key,
    // modulo opeartor to make sure it stays within the length of 50
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // SET: no loops, simply pushing so O(1)
  set(key, value) {
    let address = this._hash(key); // we want the address to be in the above function
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  // GET: if there are no collisions, will be O(1). else if are collisions O(n)
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key)
          // grabs key and checks if key matches the value
          return currentBucket[i][1]; // grap the next bucket and the next index
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.set("apples", 54));
console.log(myHashTable.set("oranges", 2));
console.log(myHashTable.keys());

// Google Interview Question: Pay attention to how the loop is looping,
// this will return different results
// in the first for loop of the first function, you'll have to do something interesting there

// Given an array, tell me the first recurring character
// should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1 , 2, 3]
// Given an array = [2, 3, 4, 5]
// should return undefined because there are no recurring characters

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    // the j = i + 1 is the loop that does the checking the next item
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i]; // return the main loop value
      }
    }
  }
  return undefined;
} // O(n ^ 2) quadratic time

// console.log(firstRecurringCharacter([2, 5, 5, 8, 1, 2, 1])); // will return 2 in this version

// ==========================================================

// Hash Table Version
function firstRecurringCharacter2(input) {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    // console.log(map[input[i]]); // does 2 exist as a key of map
    if (map[input[i]] !== undefined) {
      // will return 0 and 0 is falsey so we need to explicitly say 0 does not equal undefined
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
  return undefined;
} // O(n) - bc we create a new map object. in worst case if there is no match, it will be O(n) because it has to go through the entire list of options
// more Space but Faster Time

console.log(firstRecurringCharacter2([2, 5, 5, 1, 8, 1, 2, 4])); // will return 5 in map version
