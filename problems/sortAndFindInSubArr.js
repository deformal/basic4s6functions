//this function will find the largest element in each subArray's of an array;
//and then return an array of the largest elements of each subArray.
const exampleArray = [
  [4, 5, 1, 3, 45],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
const largestOfFour = (arr) => arr.map((ar) => ar.sort((a, b) => b - a)[0]);
console.log(largestOfFour(exampleArray));
