// Binary Agents
 // Return an English translated sentence of the passed binary string.
 // The binary string will be space separated.
 
 const convertToStrings = string => {
     const arr1 = string.split(" ").map(e=>parseInt(e,2))
     const arr2 = arr1.map(e=>String.fromCharCode(e));
     const final = arr2.join("").trim();
     return final;
 }
 console.log(convertToStrings(`01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 
 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111`));
