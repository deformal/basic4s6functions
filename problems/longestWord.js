const LongestWord = (str) =>
  str.split(" ").sort((a, b) => b.length - a.length)[0].length;
console.log(LongestWord("The quick brown fox jumped over the lazy dog"));
