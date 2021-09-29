//js clousers are
//in javascript functions are not only functions but they are also clousers
//i.e that every function has the capability to be able to access the variables declared globally in its body without passing it as an argument
//for example
let globalVariable = "batman";
const clouserUnderstanding = () => console.log(globalVariable, globalVariable);
globalVariable = "robin"; //the function will print this
clouserUnderstanding();
