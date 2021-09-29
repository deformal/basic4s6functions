// Drop it
    // Given the array arr, iterate through and remove each element starting from the first element 
    //(the 0 index) until the function func returns true when the iterated element is passed through it.
        // Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
const dropElement = (arr,func) => {
    while(arr.length > 0 && !func(arr[0])) 
        arr.shift()
    return arr
}
console.log(dropElement([1, 2, 3, 9, 2], function(n) {return n > 2;}));//should return [3,9,2]
console.log(dropElement([1, 2, 3, 9, 2], function(n) {return n > 12;}));//should return []
