// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
const convert = str => {
  const htmlPairs = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "'":"&quot;",
    '"':"&apos;"
  }
  return str.replace(/[&<>'"]/g,element=>htmlPairs[element])
}
console.log(convert('This is a "quotation mark" '));
