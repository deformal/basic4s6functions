// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
const spinalCase = str =>
  str
    .split(/\s+|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();

console.log(spinalCase("ThisIsSpinalTap"));
console.log(spinalCase("ThisisSpinalTap"));
