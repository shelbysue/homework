// keyword condition code

for (let i=1; i<=10; i++){
    console.log(i);
}

for (let i=10; i>=1; i--){
    console.log(i);
}

let z=1;
while (z<=10){
    console.log(z);
    z++;
}

do {
    console.log(z);
    z++;
} while (z<=10);
//makes sure that at least one queston gets asked

const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const foods = ["ice cream", "cake", "pizza"];
for(let number of numbers){
    console.log(number);
}

for (let food of foods){
    console.log(food);
}

foods.forEach((food) => console.log(food));

const foundItem = foods.find(food=> food === "pizza");//will stop array at first notice
//of the word
const fountItemArray = foods.filter(food=> food === "pizza"); //will return 
//each location of pizza.
console.log(foundItem);

//database 


const students = ["matt", "henry"];

for (let student of students){
    console.log('<li>${student}</li>');
}