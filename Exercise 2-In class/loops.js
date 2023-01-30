/*
for (let i = 0; i<10; i++){
    console.log(i);
}

i +=2 (get even numbers)

let students = [
    "shawn",
    "gus"
];

console.log(students[0]);
console.log(students[1]);

for (let i = 0; i <students.length; i++){
    console.log(students[i];)
}
*/
let cities = [
    {name:"livonia", visited:true},
    {name:"garden city", visited:false},
    {name:"tokyo", visited:false},
    {name:"florida", visited:true},
]

for (let i = 0; i < cities.length; i++){

    if (cities[i].visited === false)
    console.log(cities[i].visited);
}


//even number added in loop

let total = 0;

for (let i =0; i <10; i+= 2){
    total += i;
}
console.log(total);

---------------

for(init; conditional; increment)

for(let i =1; i<=1000; i++){
    console.log(i);
}

for (let i =0; i >0; i++){
    console.log(i);
}

////////////////////////////

const firstName = "shelby";
const lastName = "howard";
const fullName = `${firstName} ${lastName}`;
console.log(fullName)


const population = 1000;
console.log(population)
console.log(population * 3);

const javaScriptIsCool = true;

for (let i=1; i<=5; i++){
    console.log(i);
}

for (let i=0; i<=4; i++){
    console.log(i);
}
