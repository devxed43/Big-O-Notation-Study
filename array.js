/* ============== Build Array ================ */

class MyArray {
  constructor() {
    // length
    this.length = 0; // this.length is 0
    // data
    this.data = {}; // this.data is an empty object
  }

  // access - return the index of the data
  get(index) {
    return this.data[index];
  }

  // push - the item is the length of the data, we increment the length, and return the new length
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // pop - the last item is the length - 1 of the data, we delete the length - 1 of the data, we minus the length and return the last item
  pop() {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  // shift - we loop the index being i and when i is less than this.length, increment, the iteration of the data is the data + 1. we then delete the length - 1 of the data, then decrement the length
  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  // delete - the item is the index of the data, we this.shift the index and return the item
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
}

const newArray = new MyArray();

// push function
console.log(newArray.push("a")); // 1
console.log(newArray.push("b")); // 2
console.log(newArray.push("c")); // 3

// get/access function
console.log(newArray.get(0)); // gets item at index of 0 'a'
console.log(newArray.get(1)); // gets item at index of 1 'b'
console.log(newArray.get(2)); // gets item at index of 2 'c'

// delete function
console.log(newArray.delete(2)); // deletes item at index 2 'c'
console.log(newArray.delete(1)); // deletes item at index 2 'b'
console.log(newArray.delete(0)); // deletes item at index 2 'a'

// display array contents
console.log(newArray); // array is empty because deleted all items

// push
console.log(newArray.push("one"));
console.log(newArray.push("two"));
console.log(newArray.push("three"));

// display array contents
console.log(newArray); // one, two, three

console.log(newArray.pop()); // displays last item that gets deleted

console.log(newArray.delete(0)); // deletes item at index 0
console.log(newArray);

/* ============ Reverse String =============== */

function reverse(str) {
  // check if string is valid
  if (!str || str.length < 2 || typeof str !== "string") {
    console.log("error");
  }

  const backwards = []; // container for new string
  const lastItem = str.length - 1; // the last item is equal to the length - 1

  // the index is lastItem, as long as lastItem is greater than 0, decrement, push the iteration of the string into the container array
  for (let i = lastItem; i >= 0; i--) {
    backwards.push(str[i]);
  }
  //   return the new string joined
  return backwards.join("");
}

console.log(reverse("hellllooooooo"));

// ================= Merged Sorted Array =====================

function mergeSortedArrays(array1, array2) {
  const merged = []; // container arr

  // initiate
  let array1Item = array1[0]; // this variable holds first item in list 1
  let array2Item = array2[0]; // this variable holds first item in list 2

  // i and j indicate a nested loop
  let i = 1;
  let j = 1;

  // if checks
  if (!array1.length) {
    return array2;
  }

  if (!array2.length) {
    return array1;
  }

  // while loop
  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      merged.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      merged.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  // return container
  return merged;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 10, 30]));
