//function takes an array and some more numbers as arguments and  returns an array consisting
//of only the items that were not passed as the other arguments
const destroyer = (arr, ...args) => arr.filter(e => !args.includes(e));
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
