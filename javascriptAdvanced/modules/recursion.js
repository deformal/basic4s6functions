const number = parseInt(process.argv.slice(2));
//factorial of 0 is always 1;
const factorialRecursion = (num) =>
  num == null || undefined
    ? null
    : num <= 1
    ? 1
    : num * factorialRecursion(num - 1);
console.log(`factorial of ${number} is -> `, factorialRecursion(number));

//--------------------------------------------------------------------------------------one line countdown timer;
const recursionCountDown = (numFrom) => {
  return numFrom < 1 ? [] : [numFrom, ...recursionCountDown(numFrom - 1)];
};
console.log(recursionCountDown(number));
