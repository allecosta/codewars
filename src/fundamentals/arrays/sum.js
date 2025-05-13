/*
 * Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or 
 * non-integer. If the array does not contain any numbers then you should return 0.
 *  
 * You can assume that you are only given numbers.
 * You cannot assume the size of the array.
 * You can assume that you do get an array and if the array is empty, return 0.
 *  
 */

function sum(numbers) {
  let total = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  
  if (numbers != 0) {
    return total;
  } 
  return 0;
}

console.log(sum([1, 5.2, 4, 0, -1])); // 9.2
console.log(sum([])); // 0