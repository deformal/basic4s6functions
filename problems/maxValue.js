//const array = [10, 100, 76, 56, 32, 1, 4, 9];
const sortDeccending = (a, b) => b - a;
//const sortedArray = array.sort(sortDeccending); //a sorted array is returned
const sortedArray = process.argv.slice(2).sort(sortDeccending); //a sorted array is returned
const maxElement = sortedArray[0]; //now as we know the first element is the largest/max therefore
console.log(maxElement);
