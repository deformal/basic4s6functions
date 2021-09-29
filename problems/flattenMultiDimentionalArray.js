// Steamroll an array
  // Flatten a nested array. You must account for varying levels of nesting.
const flattenArray = array => {
  let flattenedArray = array.reduce((acc,current)=>{
    if(Array.isArray(current))
      acc = acc.concat(flattenArray(current))
    else acc.push(current)
    return acc;  
  },[])
    return flattenedArray;
}
console.log(flattenArray([1,2,3,[4],[5,[6,[7,[8]]]]]))

// another way to do this;
const flattenArray2 = array => {
  let arr = [].concat(...array)
  return arr.some(Array.isArray) ? flattenArray2(arr) : arr
}
console.log(flattenArray2([1,2,3,[4],[5,[6,[7,[8]]]]]))

///another way to do this
const flattenArray3 = array => {
  let flattenedArray = [];
  for(let i = 0; i < array.length; i++){
    if(Array.isArray(array[i]))
      flattenedArray.push(...flattenArray3(array[i]))
    else flattenedArray.push(array[i])
  }
  return flattenedArray
}
console.log(flattenArray3([1,2,3,[4],[5,[6,[7,[8]]]]]));
