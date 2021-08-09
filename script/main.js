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


// FUNCTIONS:

// let length1 = 15;
// let width1 = 10;
// let area1 = length1 * width1;

// let length2 = 22;
// let width2 = 14;
// let area2 = length2 * width2;

//console.log(area1);
//console.log(area2);
// NOT BEST USE OF PRACTICE

function area(length, width) {
    return length * width; 
}

let rectangleArea = []
rectangleArea.push(area(10,15));
rectangleArea.push(area(19,45));
rectangleArea.push(area(100,154));
console.log(rectangleArea);


// function area(length, width) {
//     return length * width; 
// }

// let area1 = area(10,15);
// console.log(area1);

let bankBalance = 700;

function makeTransaction(priceOfProduct) {
    if (priceOfProduct <= bankBalance) {
        bankBalance -= priceOfProduct;
        console.log("purchase successful");
    } else {
        console.log("insufficient funds");
    }
}

console.log(bankBalance);
makeTransaction(300.00);

console.log(bankBalance);
makeTransaction(1.50);

console.log(bankBalance);
makeTransaction(67.90);

console.log(bankBalance);
makeTransaction(900.00);

//functions stored in varaiables

let transaction = function(priceOfProduct) {
    if (priceOfProduct <= bankBalance) {
        bankBalance -= priceOfProduct;
        console.log("purchase successful");
    } else {
        console.log("insufficient funds");
    }
};  

transaction(350);

let printCustomerName = function(first,last) {
    console.log("First Name:" + first + "Last Name:" + last);
}

let applyForCreditCard = function(creditScore, soul){
}

// let bankOperations
// bankOperations.push(transaction);
// bankOperations.push(printCustomerName);
// bankOperations.push(applyForCreditCard);

//JAVASCRIPT OBJECT

function pupil(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greetings = function() {
        return "hi I'm" + this.firstName + "  i am " + this.lastName + " and i'm " + this.age + "years old";
    }
}

let p1 = new pupil ("adam", "parker", 10);
console.log(p1);
console.log(p1.greetings());

pupil.push (new pupil ("jenny", "adam", 12));
pupil.push (new pupil ("jenny", "adam", 12));
pupil.push (new pupil ("jenny", "adam", 12));
pupil.push (new pupil ("jenny", "adam", 12));

for (let index = 0; index = pupil.length; counter++) {
        let pupil = pupil[index]
     console.log(pupil.greetings());
 }

let pupil0 = {
    firstName: "John",
    lastName: "Lou",
    age: 8,
    greetings: function() {
        return "hi I'm" + this.firstName + "  i am " + this.lastName + " and i'm " + this.age + "years old";
    }
};

console.log(pupil0.greetings());

// //creates new empty objct
// let pupil1 = new Object();
// pupil1.firstName ="Luke";
// pupil1.lastName ="Adam";
// pupil1.age =7;

// let pupil2 = {};
// pupil2.firstName ="Ashton";
// pupil2.lastName ="Parker";
// pupil2.age =10;

// let pupil = [];
// pupil.push(pupil0);
// pupil.push(pupil1);
// pupil.push(pupil2);


// for (let index = 0; index = pupil.length; counter++) {
//     console.log(pupil[index]);
// }

// console.log(pupil.firstName);
// console.log(pupil.lastName);
// console.log(pupil["firstName"]); // objects with array
// console.log(pupil["lastName"]);


