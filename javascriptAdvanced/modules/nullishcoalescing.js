//nullish coalescing operator defined by the symbol "??"
 //this operator works to find if a value from the two given value si undefined or not 
 //for example
 const a = 10;
 const b = undefined;
 const c = undefined;
 const result = a ?? b;
 const result2 = c ?? b;
 console.log(result)//if the first value is undefined than the second value is printed and vice versa.
 console.log(result2);// if both values are undefined than undefined is returned.

