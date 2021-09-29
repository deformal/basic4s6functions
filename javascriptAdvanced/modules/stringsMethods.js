const testString = "2 pac is the goat, em too!";
//split() function
const test = testString.split("");
console.log(test);
//endsWith() function
const endsWithTest = testString.endsWith("too!");
console.log(endsWithTest);
const r = new RegExp();
//repeat() function
const repeatFnc = testString.repeat(3);
console.log(repeatFnc);
//slice() function //cuts a string from a given pos to the ending pos
//simple function to return a string if the length of the string is
//greater than the number given in the param;
const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num) + "..." : str;
console.log(
  "the resutl is ->",
  truncateString("Peter Piper picked a peck of pickled peppers", 11)
);

function f(num) {
  return num > 100;
}
const ar = [10, 20, 1, 3, 4, 50];
const result = (arr, func) => {
  return arr.filter(func)[0];
};
console.log(
  result(ar, function f(num) {
    return num > 10;
  })
);
