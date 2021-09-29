//functions in js are values that means that they can be 
	//assigned to a variable and also can be passed to another functions
//the functions which takes functions as input and return functions are called higher order functions
//pure functions are a core part of js functional programming.
	//pure functions output are dependent on the input of the function.
	//pure functions are predictable and return the same output on given the same input.
//functions are hoisted in the same way as the variables declared with the var keyword.
	//but the functions that are decalared as an envent handler are not hoisted
//examples

//random data
const details = [
"2021",
 {name:"saurabh",sex:"male"},
[ "js",
  "css",
  "html" 
  ]
]

//pure function and function hoisting
showDetails(details) //<---- this function call will be executed
	//even if the function is being called before it's definition.
function showDetails(data){
	return data;
}
const result = showDetails(details)
console.log(result)
//pure function end

//------------------------------------------------------

//impure function "same input but unpredictable outcome everytime"
function showDetails2(data){
	const x = ["react","vew","angular"]
	const randNumber = Math.floor(Math.random()*3)
	details[2].push(x[randNumber]);
    console.log(details,"\n")
}
showDetails2(details)
//impure function end

//------------------------------------------------------

//Anonymous function expression/event handler/function literal
//showDetails3(details) <--- this will show error 
//as only traditionally declared functions and variables
//declared by var keyword are hoisted.
const showDetails3 = function(data){
	console.log(data,"\n")	
}
showDetails3(details);
//Anonymous function end

//-------------------------------------------------------

//Named functions 
const showDetails4 = function namedFunctionExpression(data){
	details[2].pop()//pops the last element of that array
	details[2].shift()//removes the first element of that array
	 console.log(details,"\n")
};
showDetails4(details);
//Named function end

//-------------------------------------------------------

//IIFE Immediately Invoked Function Expression
(function (data) {
	console.log(data,"\n")
})(details);
//IIFE Immediately Invoked Function Expression end

//-------------------------------------------------------

//Arrow function/Lambda functions
const showDetials6 =data=> details[1].name = "Annu";
showDetials6(details);
console.log(details);
//Arrow function/Lambda functions end

//-------------------------------------------------------

//Higher Order Functions passing function as an input
	//these are the functions that acceps functions as 
	//parameters or returns a function of both.
const helperOfShowDetails7 = ()=>{
	details[1].lastname = "Jainwal";
	return details;
}
const showDetails7 = anotherFunction => anotherFunction() 
 console.log(showDetails7(helperOfShowDetails7))
//Higher Order Functions end

//---------------------------------------------------------

//Higher Order Functions returning a function with taking a function as input
const multiply = (x,y)=> x*y;
const wrapperFunction = fn => (...args) => fn(...args);  
console.log(wrapperFunction(multiply)(5,9));
//Higher Order Functions returning a function end 
