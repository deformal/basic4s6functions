//js is the most popular language 
//works only on browsers

//js uses mostly the v8 google engine
    //developed only for interpreting the js lang.
    //c++
    //uses event loops for sync and async functions
//data types

//create a function that takes an array of only numbers and returns the grand total of all the digits
  
 //js functions generally pure functions 
 
//array ka element number nhi hai 
    //Number.isNaN(array[i])

 
//storing or deleting of large data sets can be very in efficient.

//console.time("for-loop-ka-time")
// function arraySum(array){
//     let sum = 0;
//     let i;
//     let len = array.length
//     for(i = 0; i < len; i++ ){//Time complexity -> O(n) //space complextiy -> O(n) 
//      if(typeof array[i] !== "number" ) return "Wrong input"
//      else sum += array[i]
//     }  
//     return sum
// }
//console.timeEnd("for-loop-ka-time")

// console.time("while-loop-ka-time")
function arraySum2(array){
  let sum = 0,i=0
    while(i < array.length){
     if(typeof array[i] !== "number") return false
     else {
      sum += array[i]
      i++
     }
    }   
  return sum
}
// console.timeEnd("while-loop-ka-time")
//trying to delete something from an array
//problem solving skills are transferable. 
const exampleArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] //remembers indexing orders because it allows the programmer to use the random access functionality
 
function deleteItemFromArray(array){
  const response = arraySum2(array)
  if(!response) alert("Wrong Input Bro")//error
  else {
   const userInput = window.prompt("Delete kya karna hai ??")
   let len = array.length 
   let i = 0
    if(array.includes(parseInt(userInput))){  
     while(i < len - 1){
      if(array[i] == parseInt(userInput)){
       let temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
      }
      else i++
    }
     array.pop()
     console.log(array) 
   }
    else window.alert("Bhad me jaa")
  }
     
}
deleteItemFromArray(exampleArray)


//console.log(arraySum(exampleArray))
//console.log(arraySum2(exampleArray))


