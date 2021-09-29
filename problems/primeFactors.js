//find prime factors of a given number

function primeFactors(n) {
    var factors = [];
    for (var i = 2; i <= Math.sqrt(n); i++) {
        while (n % i == 0) {
            factors.push(i);
            n /= i;
        }
    }
    if (n > 1) {
        factors.push(n);
    }
    return factors;
}
console.time("prime factors in js")
console.log(primeFactors(600851475143));
console.timeEnd("prime factors in js")
