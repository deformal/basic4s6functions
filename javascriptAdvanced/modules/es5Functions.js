"use strict"; //You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.

//In javascript the functions are treated as an object
//this means that we can add properties to a function
//just like we add properties to an object
//Example:
const cardetails = (name, brand) => {
  return { name: name, brand: brand };
};
cardetails.year = "2019";
const result = cardetails("x3", "BMW");
console.log(result);
console.log("Functions are objects example", cardetails.year, "\n"); //this works but its not a good practice
//------------------------------------------------------------
//String.trim()
const string = "   Saurbh Jainwal      ";
console.log("\n", "trim", string.trim());
//trimEnd()
console.log("trimEnd", string.trimEnd());
//trimStart()
console.log("trimStart", string.trimStart());
//trimLeft()
console.log("trimLeft", string.trimLeft());
//trimRight()
console.log("trimRight", string.trimRight());
//-------------------------------------------------------------
//JSON.parse()
//JSON.stringigify()
//Data.now()
