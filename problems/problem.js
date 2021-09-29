//This is a simple example of what github copilot can do 

//find gcd of two given positive integers
function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}
const result = gcd(12, 8);
console.log(result);
