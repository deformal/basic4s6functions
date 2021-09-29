
// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on

function rot13(str) {
    let arr = [];
    for(let i =0 ; i < str.length ; i++){ 
      if(str.charCodeAt(i) > 77)
       arr.push(str.charCodeAt(i)-13)
      else if(str.charCodeAt(i) < 78 && str.charCodeAt(i) > 63)
       arr.push(str.charCodeAt(i)+13)
      else arr.push(str.charCodeAt(i))  
    }
    return arr.map(e=>String.fromCharCode(e)).join("")
  }
  
  console.time("rot13MyVersion")
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
  console.timeEnd("rot13MyVersion")

const rot13Part2 = str => {
  let vocab = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",decoded = "";
  for(let i = 0; i< str.length; i++){
    let letterIndex = vocab.indexOf(str[i])
    if(letterIndex == -1) decoded += str[i]
    else {
      let newIndex = (letterIndex + 13) % vocab.length;
      decoded += vocab[newIndex];
    }
  }
  return decoded;
}
console.time("rot13Part2")
console.log(rot13Part2("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
console.timeEnd("rot13Part2")
