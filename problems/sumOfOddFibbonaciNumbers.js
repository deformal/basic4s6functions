// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the
// sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
const express = require('express');
const app = express();
const sumOfOddFibNumbers = n =>
{
  let n1 = 0, n2 = 1, sum = 0;
  while (n2 <= n)
  {
    if (n2 % 2 !== 0)
      sum += n2;
    n2 += n1;
    n1 = n2 - n1;
  }
  return sum
}
console.log(sumOfOddFibNumbers(1000));
app.listen(3000, () => console.log("🚀 started on port 3000"))
