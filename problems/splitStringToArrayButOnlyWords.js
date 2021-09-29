//this function return an array that consists of only words and negates all the non words characters.
const splitify = (str) => str.split(/[\W]/);
console.log(splitify("This.is.a-sentence"));
//function that returns a string after converting removing all the non words characters from it.
const splitify2 = (str) => str.split(/[\W]/).join(" ");
console.log(splitify2("May-the-force-be-with-you-son"));
