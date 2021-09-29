//this is a simple function to convert every first letter of every word in a string;
const convertFn = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((e) => e.replace(e[0], e[0].toUpperCase()));
console.log(convertFn("Hello how are you"));
