// param1A	param1B	param2A	param2B	Expected Print
// "cat"	"cat"	6	"6"	true
// "five"	5	"dog"	"dawg"	false
// 0	false	"horse"	"horse"	true
// "eight"	"eight"	"ate"	"ate"	true
// 11	"eleven"	"four"	"for"	false
// "cake"	"cake"	"pie"	"pie"	true

const para1 = "0"  
const para2 =  false
const para3 = "horse"
const para4 = "horse"



{(para1 === para2 || para3 === para4) ? console.log(`true`) : console.log(`false`);}
