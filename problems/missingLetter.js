// Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
const findMissingLetter = str =>
{  
    for (let i = str.charCodeAt(0); i < str.charCodeAt(0) + str.length; i++)
        if (!str.includes(String.fromCharCode(i)))
            return String.fromCharCode(i)
    return undefined
}
console.log(findMissingLetter("abcdefg"));
