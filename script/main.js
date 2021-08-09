//let age = 23;
//console.log(age);

let name = "fatimah";
//console.log(name);

//let message = "hello my name is " + name + " and i am " + age + " years old. ";
//console.log(message);

// This would create an alert message onto the browser alert(message);

let firstName = "fatimah";
let lastName = "Sacha";
//let age = 19;
let dateOfBirth = "10-05-02"; 

//let welcomeMessage = " welcome " + firstName + " " + lastName + ". Happy " + age + "th birthday! ";
//console.log(welcomeMessage);

let sum = 20 + 15;
console.log(sum);

let sub = 20 - 10;
console.log(sub);

let mul = 3 * 3;
console.log(mul);

let div = 10 / 2;
console.log(div);

let mod = 10 % 3;
let msg = "10 / 3 = 3 remainder of " + mod;
console.log(msg);

let result = 10 * (4 + 3) - 1;
console.log(result);

if (1 == 4) {
    console.log("Well done");
}

// == equal to
// === equal to (triple equals)
// <= less than or equal to
// >= greater than or equal to
// !== not equal to


let myAcountBalance = 700;
let adidasTrainers = 1000.56;
let coupon = 600;

if (adidasTrainers <= myAcountBalance) {
    myAcountBalance = myAcountBalance - adidasTrainers;
    console.log("We just bought dope shoes!");
    console.log("Accont Balance: " + myAcountBalance);
} else if (adidasTrainers - coupon <= myAcountBalance) {
    console.log("We just bought dope shoes!");
    myAcountBalance = adidasTrainers - coupon;
    console.log("Accont Balance: " + myAcountBalance);
} else {
    console.log("you're too broke for shoes");
    console.log("Accont Balance: " + myAcountBalance);
}

if (1===1 && 2===2) {
    console.log("these are both true");
}

if(true && true || "fatimah" === "fatimah") {
    console.log("these are the same");
}

if (1===3 || "fatimah" === "fatimah") {
    console.log("one of these are true");
}

// || this is the OR sign
// ! is equal to not true

// let cat1 = 10;
// let cat2 = 45;
// let cat3 = 3;
// let cat3Disabled = true;

// if (cat1 > cat2 && cat1 > cat3 && !cat3Disabled) {
//     console.log("cat 1 is the cutest");
// } else if (cat2 > cat1 && cat2 > cat3 && !cat3Disabled) {
//     console.log("cat 2 is the cutest");
// } else if (cat3 > cat1 && cat3 > cat2 || cat3Disabled ) {
//     console.log("cat 3 is the cutest");
// }

//let students = ["timmy", "Adam", "John"];
//console.log(students[1]);

let food = ["chocolate", "sweets", "burger", "fruit", "carrots"];

let unhealthyFood = [];
unhealthyFood.push(food[0]);

// how to remove elements from an array:

let index = unhealthyFood.indexOf("chocolate");
console.log(unhealthyFood);
let index2 = food.indexOf("burger");
let index3 = food.indexOf("fruit");
if (index > -1) {
    unhealthyFood = unhealthyFood.splice(index, 1);
}

console.log(index3);

//splice will start and find the starting index
// array are linear and above example is not best use of practice

// ARRAYS ARE MAINLY USED FOR NUMBERS NOT TEXTS


/*FOR LOOPS: (iterating through something)
let totalPrice = 50;
for (let counter = 0; counter < totalPrice; counter++ ) {
    console.log(counter);
}

let total = 10;
for (let counter = 0; counter < total; counter++ ) {
    console.log(counter);
}

let price = 5;
for (let i = 0; i < price; i++) {
    console.log(i);
}

let students = ["john", "adam", "valerie", "luke", "dani"];
for (let counter = 0; counter = students.length; counter++) {
    console.log(students[counter]);
}

let confectionary = ["starbusts", "laces", "haribos", "chewits"];
for (let counter = 0; counter = confectionary.length; counter++) {
    console.log(confectionary[counter]);
}*/
