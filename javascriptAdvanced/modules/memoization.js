//memoized recursive function that strore values in a cache and returns the cached values for same inputs
function memoizeFunction(func) {
    var cache = {};
    return function() {
        //for arguments that are already in the cache
         var key = arguments[0];
         if(cache[key]) {
         return cache[key];
         }//for new arguments 
         else {
         var val = func.apply(this, arguments);
         cache[key] = val;
         return val;
         }
    };
}
var fibonacci = memoizeFunction((n) => {
    return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
console.log(fibonacci(20));
global.globalvar = "hello"
