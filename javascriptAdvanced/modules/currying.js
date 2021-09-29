//a simple example of what currying is in javascript.
//currying is basically function returning a function to itself and finaly solving it.

function add(x) {
  return y => z => x + y + z;
}
console.log(add(10)(20)(30));
