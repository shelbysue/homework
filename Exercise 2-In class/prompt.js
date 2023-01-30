/*const prompt = require('prompt-sync')();

const temp = prompt("what is the temp?");

console.log(temp);


const prompt = require('prompt-sync')();

const size =prompt("What size would you like?");
const pepperoni = prompt("pepperoni?");
const delivery = prompt("do you need delivery?");

let total = 0;

if (size === "XL") {
    total = total + 8;
} else if (size === "L"){
    total = total + 7;
} else if (size === "M"){
    total = total + 6;
} else if (size === "s"){
    total = total + 5;
} else {
    console.log('not option');
}

if (pepperoni === "yes"){
    total = total + 2;
    total += 2;
}

if (delivery === "yes"){
    total = total + 10;
}

total += (total * 0.06);

console.log(total);

*/


const prompt = require('prompt-sync')();

let actualTemp = 68;
let desiredTemp = 72;


if (actualTemp < desiredTemp) {
    console.log("run heat")
} else if (desiredTemp > actualTemp) {
    console.log("run ac")
} else {
    console.log("standby")
}

