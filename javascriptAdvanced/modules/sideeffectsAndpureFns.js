//Side Effects and Pure Functions
//Side Effects it is a change of system state or observable
//interaction with the outside of that function that occurs
//during the calculation of a result.
//Most Common example of a side effect in js is console logging.
//Example;
const add = (x, y) => {
  console.log("Sum is-->", x + y);
  //return x+y; <---- this is the default behaviour of a function
  //if a function doesnt return that is
  //immediately a impure function as it has
  //a side effect
};
add(2, 5);
//example end
//Invoking methods on objects is a common cause of side effect
//Example:
class person {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
    this.age = 22;
  }
  //setters
  set changeName(newName) {
    this.name = newName;
  }
  set changeSex(newSex) {
    this.sex = newSex;
  }
  //getter
  get display() {
    // this is an example of a pure function
    return { name: this.name, sex: this.sex, age: this.age };
  }
}
const newPerson = new person("Saurabh", "male"); //object initialization of the person class
//now if we invoke the either of the two functions of the
//person class changeName & changeSex respectively
//we will performing a sideffect.
//as invoking methods on objects causes sideffects
newPerson.changeName = "Annu";
newPerson.changeName = "Wonder Women";
newPerson.changeSex = "Female";
const details = newPerson.display; //just calling the get display function
console.log({ details });
//even making a http request is a simple sideffects.
//sideffects are what haapens outside of a function because of it
