//this function simply removes falsy values from an array
//function takes an array with some noraml and falsy elements and then it removes all the falsy elements
const arr = [1, 2, null, 0, undefined, false, "", 3];
//const falsyFilter = (arr) => arr.filter((e) => e);
const falsyFilter = (arr) => arr.filter(Boolean);
console.log(falsyFilter(arr));
