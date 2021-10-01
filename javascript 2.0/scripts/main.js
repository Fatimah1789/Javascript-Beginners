// variables:
let x = 10;
let y = 50;
let sum = x * y;
console.log(sum);

let a = 100;
let b = 5;
let total = x / y;
console.log(total);

let name = "Fatimah Sacha";
console.log(name);

//DATA TYPES: data is stored inside variables by using keyword 'let'

// STRING data type - sentence wrapped in double quotes 
let lastName = "Hello my name is Fatimah Sacha and I am 19 years old";
console.log(lastName);

let footballClub = "Manchester United are going to win the premier league";
console.log(footballClub);

let weather = "It's a sunny day";
console.log(weather);
// if you want quotation mark in your string:
let weather_a = "It is a \"sunny\" day";
console.log(weather_a);

//NUMERIC data type - no decimal point
let num = 1000;
console.log(num);
//Decimal point:
let num1 = 567.78;
console.log(num1);

//BOOLEAN data type - True or False statement:
let counter = true;
let counter1 = false;
/* if you set a boolean to 1 = true
   if you set boolean to 0 = false */
   
// UNDEFINED data type - when you dont assign a va;ue to the variable 
let hello;

//NULL data type - data type defined to nothing
let u = null;
console.log(u);

// if you add typeof you can see what type of data type it is
let r = 12345;
console.log(typeof r);

//javascript LOGICAL OPERATORS:
// ASSIGNMENT OPERATORS:
let num4 = 10;
//num4 = num4 + 20; //OR
num4 += 20;
console.log(num4);

let num5 = 56/7
console.log(num5);

//STRING OPERATOR - data that is combined with string:
let age1 = 45
let info = "My name is John and I am "+ age1 +"  years old";
console.log(info);

let count = 57 + " " + 78;
console.log(count); // this is for space between numbers

//CONDITIONAL STATEMENTS - code is only ran if statement is met (if statements)
let num9 = 15;
let num10 = 20;

if (num9 == 20 || num10 < 10) {
    console.log("hello world");
} else {
    console.log("try Again!");
}

if (num9 == 20 || num10 < 10) {
    console.log("hello world");
} else if (num9 > 7){
    console.log("hi");
} else{
    console.log("try Again!");
}

let gender = "female";
let age = 19;

if(gender == "female"){
    if (age >= 18){
        console.log("You are a " + gender + " and above the age limit");
    }else {
        console.log("better luck next time");
    }
} else if (gender == "male") {
    if(age >= 18) {
        console.log("You are a " + gender + " and above the age limit");
    } else {
        console.log("better luck next time");
    }
} else {
    console.log("Undefined gender");
}

//=== to check if smething is equal to 
//!== to check if not eqal to

//ARRAYS - store many pieces of information inside one container:
let items = ["apple", "bananas", "pears", "orange"];

items[1] = "blueberries" // to reassign new values in array
console.log(items[1]);

// JAVASCRIPT PROPERTIES & METHODS:
let product = "football";
console.log(product.length);
console.log(product.indexOf("ball"));
console.log(product.substring(3, 5));
console.log(product.replace("foot", "base"));
console.log(product.toUpperCase());

let item = ["apple", "bananas", "pears", "orange"];
console.log(item.join()); // combine all items in a string
console.log(item.join(" - "));
console.log(item.join(", "));
console.log(item.pop()); // the data its going to remove from the array
item.pop();
console.log(item.join(", "));

item.push("blackberries")
console.log(item.push("blackberries"));

// JAVASCRIPT FUNCTIONS:
// NAME FUNCTION:
/*function testExample() {
   let food = "tomato and basil soup";
    console.log(food);
    return food; //stored not outputted
}
testExample();
console.log(testExample());*/

function testExample1(gh) {
    let foods = "this is not nice" + gh;
    return foods;
}
let foodName = "Daniel"
console.log(testExample1(foodName));

//ANONYMOUS FUNCTION - ie event listeners:
let testExample = function(gu) {
    let food = "tomato and basil soup";
    return food; 
}
let gu = "made by daniel";
console.log(testExample());

(function() {
    let productAvailability = "toilet paper";
    console.log(productAvailability);
}())

//VARIABLE SCOPES - global and local scopes

let sumTotal = 20; //global scope

function calc(){
    return sumTotal;
}
console.log(calc());

function calc(){
    let sumTotal = 20; //local scope
    return sumTotal;
}
console.log(calc());

//FUNCTION SCOPE
//{ let xy } // undefined variable
// block scope used with if statemnts
if (34*2 == 68) {
    console.log("this is correct");
}else{
    console.log("try again!");
}

// const variable can not be changed later on
const TOTAL = 20;
console.log(TOTAL);








