// 1. Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. 
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}
console.log(maxOfTwoNumbers(3, 9));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 2.Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (x, y, z) {
  if (x >= y && x >= z) {
    return x;
  }
  else if (y > x && y > z) {
    return y;
  }
  else {
    return z;
  }
}
console.log(maxOfThree(16, 152, 8));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(x) {
  if (x === 'a' || x === 'e' || x === 'o' || x === 'i' || x === 'u') {
    return true;
  }
  else {
    return false;
  }
}
console.log(isCharAVowel('a'));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//4.Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. 
let ar = [3, 6, 5];
const sumArray = function (arrayOfnumbers) {
  let sum = 0;

  for (let i = 0; i < arrayOfnumbers.length; i++) {
    sum += arrayOfnumbers[i];
  }
  return sum;
};
console.log(sumArray(ar));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers.
let arr = [2, 3, 4, 6]
function multiplyArray(numbers) {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
};
console.log(multiplyArray(arr));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
const numArgs = function (...args) {
  return args.length;
};
console.log(numArgs(1, 2, 4, 6, 55));


//7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. 
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("map"));


//8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
const longestStringInArray = function (arr) {
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  return maxLength;
};
console.log(longestStringInArray(["map", "figure", "solid"]));

