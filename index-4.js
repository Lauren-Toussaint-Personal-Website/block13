// If the value is truthy, print true;
// If the value is falsy, print the corresponding result:
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";

// "I am a string"	true
// false	"The boolean value false is falsy"
// null	"The null value is falsy"
// undefined	"undefined is falsy"
// 0	"The number 0 is falsy (the only falsy number)"
// ""	"The empty string is falsy (the only falsy string)"

const str1 = "I am a string"
const str2 = false
const str3 = null
const str4 = undefined
const str5 = 0
const str6 = ""


console.log(!str1)
console.log(!!str1)
console.log(typeof str1)

if (str2 === false) 
{console.log(str2+" boolean value is falsy")
}
{console.log(typeof str2)
}
if (str5 === 0)
{console.log(str5+" value is falsy, the only falsy number")
}
{console.log(typeof str5)
}
if (str6 === "")
{console.log(str6+" value is falsy, the only falsy string")
}
{console.log(typeof str6)
}
if (str4 === undefined)
{console.log(str4+" is falsy")
}
{console.log(typeof str4)}
if (str3 === null)
{console.log(str3+" is falsy")
}
{console.log(typeof str3)};