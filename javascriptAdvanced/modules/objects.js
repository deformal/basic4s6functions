//objects in js
const person = {
  name: "saurabh",
  sex: "male",
  education: [
    { "school name": "dav" },
    { "collage name": "IGNOU" },
    { "degree name": "BCA" },
  ],
  "physical stats": [{ height: 170 }, { weight: 70 }],
};
//how to access and object's property
//1 the dot way
console.log(person.name);
//2 the [] way
console.log(person.sex);

//changing the property values
person["physical stats"][1].weight = 73;
console.log(person);

//deleting a object property
delete person.education[0]["school name"];
console.log(person);
globalvar = "sup"//this is the global variable defined in the meoizatin.js file
console.log(globalvar)
