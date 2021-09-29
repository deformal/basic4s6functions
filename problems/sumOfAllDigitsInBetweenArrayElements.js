//this function takes an array as arguments containing two elements.
//these elements are numerical values
//this function will return the sum of all the elements in between these two numbers, including them
const sum = arr => {
  const [largest, smallest] = arr.sort((a, b) => b - a);
  return largest !== smallest
    ? smallest + sum([largest, smallest + 1])
    : largest;
};
console.log(sum([parseInt(process.argv[2]), parseInt(process.argv[3])]));
