// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example,
// 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// one way to write this function is below; 

const primeSum = (number) =>
{
    let sum = 0;
    const isPrime = n =>
    {
        let divisor = 2;
        while (divisor < n)
        {
            if (n % divisor == 0) return false;
            else divisor++;
        }
        return true;
    }
    for (let i = 2; i <= number; i++)
    {
        if (isPrime(i))
            sum += i;
    }
    return sum;
}
console.log(primeSum(10))//should output 17 

//another sort way of doing it specifically in javascript
const primeSum2 = number =>
{
    let primeNumbers = [];
    for (let i = 2; i <= number; i++)
        if (primeNumbers.every(num => i % num !== 0))
            primeNumbers.push(i)
    return primeNumbers.reduce((total, current) => total + current, 0)
}
console.log(primeSum2(10))//should output 17 
