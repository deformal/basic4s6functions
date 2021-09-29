//regex ignore flag
// important in regexes the "()" defines a value that must be there and is calculated seperately;

const iFlagRegex = /saurabh/i; //ignores the case sensitiveness.
const gFlagRegex = /saurabh/gi; //ignores the case sensitiveness.
const dotOperatorRegex = /.....bh/g; //lets you match all the words that met some criteria like 7 letter word ending with 'bh';
const negatedRegex = /[^\wsaurabh]/; //finds any character not between the brackets;
const plusRegex = /S+/g; // looks for character that occur 1 or more times in the sting  - in this example 'S';
const astrixRegex = /j*/g; // looks for character that occur zero or more times in the stirng in this example 'j'
const findWordCharacter = /[saurabh]\w/;

const string = "SaurabH is good , saurabh is okay , Saurabh is cage";
const inputValue = process.argv.slice(2);
const result = iFlagRegex.test(string);
const matchRegex = string.match(iFlagRegex); //matchs for the given regex pattern in the string; and returns the index of it;
const gFlag = string.match(gFlagRegex);
const dotOperator = string.match(dotOperatorRegex);
const negateOperator = string.match(negatedRegex);
const plusOprtr = string.match(plusRegex);
const astrixOprtr = string.match(astrixRegex);
const findWord = string.match(findWordCharacter);

console.log(result);
console.log(matchRegex);
console.log(gFlag);
console.log(dotOperator);
console.log(negateOperator);
console.log(plusOprtr);
console.log(astrixOprtr); //will return empty as there is no j in the string;
//----------------------------------------------------------------
//the look aheads....
//regex look ahead
//lookaheads are patterns that telll js to look ahead in our string to check
//for patterns further along.this can be useful when yhou want ot search for multiple pattens over the same string
//there are two kinds of lookaheads 1) +ve lookahead and a -ve lookahead.
//+ve lookahead will look to make sure the element in the search patterns is there,
//but wont actually match i t . a +ve lookahead is used as ?=...
//where the ... is the required part that is not matched.
//
//-ve lookahead will look to make sure the element in the search patterns is not there.
//a -ve lookahead is used as (?!...)where ... is the pattern that you dont want to be there.
//

//the password should be of atlease 8 and max of 20 characters including Capital case and lowercase and characters;
//the password should begin with a letter;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/g; //?= quantifier searches for anything followed by a specific string;
const password = passwordRegex.test(inputValue[0]);
console.log("password entered -> ", inputValue[0]);
console.log("password test result -> ", password);

//____----------------------------------------------------
//some patterns
//patten to match a string which is 5 or more characters and have
//two consecutive numbers in it ex ->  banana12 is correct but banana1d2 is not.
const testString1 = "banana144d";
const pattern1 = /^(?=[a-z])(?=.*[0-9]{2}).{5,}$/;
console.log(
  "the result of banana144d to test for pattern1 -> ",
  pattern1.test(testString1)
);
//pattern to match for a name with a middle name or not;
const testString2 = "Saurabh Jainwal";
const pattern2 = /^(saurabh|mannu).*Jainwal$/i;
console.log(pattern2.test(testString2));
//pattern to match for a email
const testString3 = "saurabh@gmail.com";
const emailPattern =
  /^(?=.*([a-zA-Z0-9]+)[@]{1}[a-z]{4,}[.]{1}[a-z]{2,4}).{14,}$/;
console.log(
  "emailPattern -> ",
  emailPattern.test(testString3) ? "Correct Format" : "wtf"
);

//RegExp()function helps to make a new regExp and then test that based on inputs;
//for example
//function that checks if a string ends with a specific work of string;
const confirmEnding = (str, target) => RegExp(target + "$", "i").test(str);
console.log(confirmEnding("Open hello sup sesame", "ame"));
//----------------------another
const doesItInclude = (str, target) => RegExp("(?=" + target + ")").test(str);
console.log("result of doesItInclude", doesItInclude("Rick Ross Boss", "cat"));
