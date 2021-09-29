//js predicates are the functions that only return true of false as their output.
//these functions are generally inputs of a another higher order functions;
//for example:
const exampleArray = ["clark", "bruce", "barry"];
const peopleArray = [
  { name: "papa", age: 50 },
  { name: "saurabh", age: 22 },
  { name: "ayushi", age: 19 },
  { name: "mannu", age: 17 },
];
const superHeros = [
  { name: "batman", human: true, powers: "" },
  { name: "superman", human: false, powers: "" },
  { name: "flash", human: false, powers: "" },
  { name: "ironman", human: true, powers: "" },
  { name: "daredevil", human: true, powers: "" },
];
//--------------------------------------------------------------------isArray function use of predicates
const isarray = (array) => Array.isArray(array);
const result = isarray(exampleArray);
console.log(result);
//----------------------------------------------------------------------filter function use of predicates
const ageLessThan20 = (item) => item.age < 20;
const ageGreaterThan20 = (item) => item.age > 20;
const lessThanResult = peopleArray.filter(ageLessThan20);
const greaterThanResult = peopleArray.filter(ageGreaterThan20);
console.log(
  "\nfilter condition -> ",
  "age < 20 ",
  "filter result -> ",
  lessThanResult
);
console.log(
  "\nfilter condition -> ",
  "age > 20 ",
  "filter result -> ",
  greaterThanResult
);
//--------------------------------------------------------------------------map function use of predicates
const isHuman = (superhero) =>
  superhero.human ? (superhero.powers = "no") : (superhero.powers = "yes");
const isHumanResult = superHeros.map(isHuman);
console.log(isHumanResult);
console.log(superHeros);
