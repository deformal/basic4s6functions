//There are some built in array functions in js language.
//global array
const exampleArray = ["kohli", "rohit", "dhoni"];
const exampleArray2 = ["ishant", "bhumra", "bhuvneshwar"];
const exampleArray3 = [1, 10, 3, 6, 18, 99, 50];
const exampleArray4 = [1,2,3,4,[5,6,7,[8,9]]]
const exampleString = "saurabh jainwal";
//Array.isArray()
const isarraychecker = () => Array.isArray(exampleArray);
console.info("Array.isArray example", isarraychecker(), "\n");
//Array.map()
const mapHelper = (item) => item + 1;
console.log(
  "\nmap()",
  "this function is a hof which takes in an array and returns a functions which uses the arrays iterators and iterates over the given array",
  "provides a functoin for each element of the array",
  exampleArray3.map(mapHelper)
);
//Array.entries()
const iteratorObject = exampleArray.entries();
console.log(
  "\nentires()",
  "returns an Array iterator object with key/value pairs -> "
);
for (let itemsss of iteratorObject) {
  console.log(itemsss);
}
//Array.filter()
const filterHelper = (item) => item < 50;
console.log(
  "\nfilter()",
  "method creates an array filled with the elements of the array which fullfills a given condition as a function",
  "in this case element should be less than 50 (array is) -> ",
  exampleArray3.filter(filterHelper)
);
//Array.sort()
const sortNumericalAccending = (a, b) => a - b;
const sortNumericalDeccending = (a, b) => b - a;
console.log(
  "\nsort()",
  "sorts an array in alphabetical order not in numerical order -> ",
  exampleArray2.sort(),
  "sort is an higher order function and can take a function as an input and it can take a numerical sort function  ->",
  "numericaly accending sorted array -> ",
  exampleArray3.sort(sortNumericalAccending)
);
//Array.reverse()
console.log(
  "\nreverse()",
  "reverses the elements in the array",
  "reversed array ->",
  exampleArray.reverse()
);
//Array.reduce() // this method reduces an array into a single digit and stores the total in the first variable and the second variable is the current element
const reduceHelper = (total, currenElement) => (total += currenElement);
const reduceResult = exampleArray3.reduce(reduceHelper, 0); //initial value
console.log(
  "\nreduce()",
  "reduces an array into a one digit and takes a function and an initial value as an input ->",
  reduceResult
);
//forEach()
exampleArray.forEach(
  (element, i) => (exampleArray[i] = element + " is a batsman")
);
console.log(
  "\nforEach()",
  "performs a function of each element value of the given array",
  "reutrns ->",
  exampleArray
);
//for(of)
for (let element of exampleArray) {
  element = element + " hello"; //this wont make any chnages in the original array
}
console.log(
  "\nforof",
  "this method just traverses the array and returns the element value but you cant update the value from this function",
  exampleArray
);
//for(in)
for (let elementIndex in exampleArray) {
  exampleArray[elementIndex] = exampleArray[elementIndex] + " hello";
}
console.log(
  "\nforin ",
  "this method just traverses the array and returns the element index but not the actual value but and can update the value from this function",
  "returned ->\n",
  exampleArray
);
//Array.from()
console.log(
  "\nfrom()",
  "turns array from a string -> ",
  Array.from(exampleString)
);
//Array.includes()
console.log(
  "\nincludes()",
  "method checks for a given element in the array and returns true or false",
  "returned -> ",
  exampleArray3.includes(99)
);
//Array.some()
const someHelper = (item) => item > 50;
const someResult = exampleArray3.some(someHelper);
console.log(
  "\nsome()",
  "checks if any array element passes a given condition -> ",
  someResult
);
//Array.every()
const checkLessThan100 = (item) => item < 100;
console.log(
  "\nevery()",
  "this methods checks if all elements in an pass a test provided as a function",
  "this returns ->",
  exampleArray3.every(checkLessThan100)
);
//Array.fill()
exampleArray.fill("Warner", 1, 2);
console.log(
  "\nfill()",
  "fills the specified value in specified place",
  exampleArray
);
//Array.indexOf()
const indexOfexample = exampleArray2.indexOf("ishant");
console.log(
  "\nindexOf",
  "this methods returns the index of a an element thats been searched",
  "this example serched for index of ishant",
  "returned -> ",
  indexOfexample
);
//arrray.keys()
const keysHelper = exampleArray.keys();
console.log("\nkeys()", "method returns the indexes of the array elements ->");
for (let x of keysHelper) console.log(x);
//Array.find()
const findHelper = (item) => (item == 99 ? "Match Found" : "No match found");
console.log(
  "\nfind()",
  "this method returns the first element's value which mathces a given condition given as a function",
  exampleArray3.find(findHelper)
);
//array.lastindexof()
console.log(
  "\nlastIndexof()",
  "method serches for an index of an specified item from a specified place if provided ->",
  exampleArray2.lastIndexOf("bhuvneshwar")
);
//Array.findIndex()
const findIndexHelper = (item) => item == 99;
console.log(
  "\nfindIndex()",
  "this method returns the index of the first element that mathces a given condition as a function",
  exampleArray3.findIndex(findIndexHelper)
);
//toString()
console.log("\ntoString()", "Converted toString()", exampleArray.toString());
//join()
console.log("\njoin()", "converted to string by join", exampleArray.join("*"));
//pop()
console.log(
  "\npop()",
  "removes the last element and returns the element removed ->",
  exampleArray.pop(),
  exampleArray
);
//push()
console.log(
  "\npush()",
  "adds the last element and returns length of array ->",
  exampleArray.push("starc"),
  exampleArray
);
//shift()
console.log(
  "\nshift()",
  "removes the first element and returns the element removed -> ",
  exampleArray.shift("sachin"),
  exampleArray
);
//unshit()
console.log(
  "\nunshift()",
  "adds the first element and returns length of array -> ",
  exampleArray.unshift("dravid"),
  exampleArray
);
//splice()
console.log(
  "\nsplice()",
  "adds a new item to the array and anywhere you want and returns deleted items if any ->",
  "Newley removed Elements -> ",
  exampleArray.splice(1, 0, "warn", "peterson"),
  "Removed Element ->",
  exampleArray.splice(1, 1),
  "Final Array ->",
  exampleArray
);
//slice()
console.log(
  "\nslice()",
  "slices out a piece of an array into a new array",
  "new array is sliced from the given index number (1) -> ",
  exampleArray.slice(1),
  "slicing from 0 to 1 only -> ",
  exampleArray.slice(0, 1),
  "the main array remains same no changes ->",
  exampleArray
);
//concat()
console.log(
  "\nconcat()",
  "merges two given arrays and display a new array ->",
  exampleArray.concat(exampleArray2)
);
//.length()
console.log(
  "\narray.length",
  "returns the length of the array ->",
  exampleArray.length
);
//.flat()
console.log("\nflat()",
  "returns an array with subArray concatinated in the main array till specific depth",
  exampleArray4.flat(1)//[1,2,3,4,5,6,7,[8,9]]
 )
