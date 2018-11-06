'use strict';

//Complexity: O(1) constant
//Why: Because there's no loop and all it does is one calculation
function isEven(value){
  if (value % 2 === 0){
    return true;
  }
  else
    return false;
}

//Complexity: O(n^2) or polynomial
//Why: Because there's a loop nested within a loop
function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

//Complexity: O(n) or Linear
//Why: Because it runs through the loop once
function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

//Complexity: O(n) or Linear
//Why: Because it runs through the loop once
function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

//Complexity: O(log(n)) or Logarithmic
//Why: Each running of the i loop will do less and less runs of the j loop
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i+1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}
// arr.length = 10
// i = 0
//   j = 1 -> 10   9
// i = 3
//   j = 4 -> 10   6
// i = 7
//   j = 8 -> 10   2



//Complexity: O(n) or Linear
//Why: There's only one loop
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

//Complexity: O(log(n)) or Logarithmic
//Why: Each round through the loop, it cuts the array to look at in half. Then searches through a less and less number of items.
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}

//Complexity: O(1) or constant
//Why: Accessing an element in an array is constant
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Complexity: O(n) or Linear
//Why: There is a single for loop
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}
