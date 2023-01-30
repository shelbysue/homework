const prompt = require('prompt-sync')({sigint:true});

const temp = prompt("what is the temperature?");

const unit = (temp[temp.length-1])

console.log(unit);

if (temp === "F"){
    temperature -= 32;
} else if (temp === "C"){
    temperature +=32;
}

