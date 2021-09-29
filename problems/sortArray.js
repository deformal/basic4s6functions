console.log(process.argv.slice(12));
const sortArrayD = (array) => array.sort((a, b) => b - a);
const sortArrayA = (array) => array.sort((a, b) => a - b);
const alphabeticalOrder = (arr) =>
  arr.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1));
//sort an array without changing the actual array passed to the function
const sortArrayWithNoSideEffects = (array) =>
  [].concat(array).sort((a, b) => a - b);

const accendingOrder = sortArrayA(process.argv.slice(2, 11));
const deccendingOrder = sortArrayD(process.argv.slice(2, 11));
const alphabeticalOrderSort = alphabeticalOrder(process.argv.slice(12));
const noSideEffectSort = sortArrayWithNoSideEffects(process.argv.slice(2, 11));

console.log("Accending Sort -> ", accendingOrder, "\n");
console.log("Deccending Sort -> ", deccendingOrder, "\n");
console.log("Alphabetical Sort -> ", alphabeticalOrderSort, "\n");

//run this -> node sortArray 10 20 1 2 100 35 37 99 86 45 a q z h j l e m c d p b
