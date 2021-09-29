//function to return a minimun and a maximum element from a given array
const exampleArray = [1,2,3,4,100,50,]
const minMaxReturn = (array) => {
    let sortedArray = array.sort((a,b)=>a-b)
    let min = sortedArray[0],max = sortedArray[sortedArray.length-1]
    return {"minimum":min,"maximum":max}
}
const result = minMaxReturn(exampleArray)
console.log(result)

