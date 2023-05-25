// task 1: age

let userAge = prompt("Enter your age: ");
let currentYear = new Date();

let birthYear = currentYear.getFullYear() - userAge;
alert(birthYear);

// task 2: temperature

let celsious = prompt("Enter Celsious temperature: ");
let fahrenheit = celsious * (9/5) + 32;

alert(fahrenheit);

//task 3: divide

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");

let divide = a/b;
let result = Math.floor(divide);
alert(result);

// task 4: currency

const rate = 37.45;
let dollar = prompt("Enter dollar amount: ");

let total = rate * dollar;
alert(total.toFixed(2));

// task 5: RGB

const red = +(prompt("Enter amount of red: "));
const green = +(prompt("Enter amount of green: "));
const blue = +(prompt("Enter amount of blue: "));

const rgb = "#" + (red.toString(16) + green.toString(16) + blue.toString(16)).toUpperCase();

alert(rgb);

// task 6: flats

let floors = +prompt("Enter amount of floors: ");
let flats = +prompt("Enter amount of flats on the floor: ");
let flatNumber = +prompt("Enter the number of the flat: ");

let allFlats = floors * flats;
let entrance = Math.ceil(flatNumber / flats / floors);
let floorNum = Math.ceil(flatNumber % allFlats / flats);

alert("Entrance: " + entrance + ", Floor: " + floorNum);



