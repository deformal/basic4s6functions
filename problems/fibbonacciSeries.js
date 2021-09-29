const fibbonacctiSeriesPrinter = n =>
{
    let counter = 1, prev = 0, next = 1, sum = 0;
    while (counter < n)
    {
        console.log(next)
        sum += next;
        next += prev;
        prev = next - prev;
        counter++;
    }
    return `Total sum of first ${n} fibbonacci numbers is -> ${sum}`;
}
const fn = n =>
    n <= 1 ? 0 : 1 + fn(n - 1) + fn(n - 2);


console.log(fibbonacctiSeriesPrinter(10))
console.log("Total of first given fibbonacci numbers is ->", fn(10))
