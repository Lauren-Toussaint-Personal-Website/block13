// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";
// num1	num2	Expected Print
// 50	51	"101 is greater than 100"
// 99	-2	"97 is greater than 0"
// 0	101	"101 is greater than 100"
// 500	-500	"0 is equal to 0"
// -1000	0	"-1000 is a negative number"
// -5	0	"-5 is a negative number"
const num1 = 1094
const num2 = -1099

const sum1 = num1 + num2

if (sum1 < -1000) {

    console.log(`${sum1} is less than -1000`);
}

else if (sum1 < 0) {

console.log (`${sum1} is a negative number`);

}

else if (sum1 === 0) {

    console.log (`${sum1} is equal to 0`);

}

else if (100 >= sum1) {

    console.log (`${sum1} is greater than 0`);

}

else if (sum1 > 100) {

    console.log (`${sum1} is greater than 100`);

}