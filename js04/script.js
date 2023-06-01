let task1 = "Odd";
let task2 = "Lexics";
let task3 = "Boolean";
let task4 = "Boolean: if";
let task5 = "Sizes";
let task6 = "Ternary";
let task7 = "Prompt: or";
let task8 = "Confirm: or this days";
let task9 = "Confirm: if this days";
let task10 = "Default: or";
let task11 = "Default: if";
let task12 = "Login and password";
let task13 = "Currency exchange";
let task14 = "Scissors";

let task = prompt("Task name: ")

if(task === task1) {
// task 1: odd
{
    let number = +prompt("Enter the number: ");
    if (isNaN(number)) {
        alert("Invalid input");
    }
    else {
        let rest = number % 2;
        if (rest === 1) {
            alert("Odd number");
        }
        else {
            alert("Even number");
        }
    }
}
}

if(task === task2) {
    //task 2: lexics
{
    let badWord = "beach";
    let input = prompt("Enter the text");
    let hasBadWord = input.includes(badWord);
    if (hasBadWord) {
        alert("Bad Word Warning!");
    }
    else {
        alert("No Bad Words)");
    }
}
}

if(task === task3) {
    //task 3: boolean
{
    const cola = confirm("Do you like Cola?");
    const sex = confirm("Are you male?");
    const work = confirm("Are you at work right now?");
    
    console.log(cola, sex, work);
}
}

if(task === task4) {
    //task 4: boolean: if
{
    const sex = confirm("Are you male?");
    if (sex) {
        alert("You are male");
    }
    else {
        alert("You are female");
    }
}
}

if(task === task5) {
    //task 5: sizes
{
    const waist = +prompt("Waist");
    const hips = +prompt("Hips");
    if (waist >= 63 && waist <= 65 && hips >= 89 && hips <= 92) {
        alert("Your international size: XXS");
    }
    else if (waist >= 66 && waist <= 69 && hips >= 93 && hips <= 96) {
        alert("Your international size: XS");
    }
    else if (waist >= 70 && waist <= 74 && hips >= 97 && hips <= 101) {
        alert("Your international size: S");
    }
    else if (waist >= 75 && waist <= 78 && hips >= 102 && hips <= 104) {
        alert("Your international size: M");
    }
    else if (waist >= 79 && waist <= 83 && hips >= 105 && hips <= 108) {
        alert("Your international size: L");
    }
    else if (waist >= 84 && waist <= 89 && hips >= 109 && hips <= 112) {
        alert("Your international size: XL");
    }
    else if (waist >= 90 && waist <= 94 && hips >= 113 && hips <= 117) {
        alert("Your international size: XXL");
    }
    else if (waist >= 95 && waist <= 97 && hips >= 118 && hips <= 122) {
        alert("Your international size: XXXL");
    }
}
}

if(task === task6) {
    //task 6: ternary 
{
    const sex = confirm('Are you male?') ? "You are male" : "You are female";
    alert(sex);
}
}

if(task === task7) {
    //task 7: prompt: or
{
    const age = prompt("Enter yout age: ") || alert("Try again");
}
}

if(task === task8) {
    //task 8: confirm: or this days
{
    let shopping = confirm("Shopping?") || alert("You are a poop");
}
}

if(task === task9) {
    //task 9: confirm: if this days
{
    const shopping = confirm("Shopping?");
    if(shopping == null || shopping == 0) {
        alert("You are a poop");
    }
}
}

if(task === task10) {
    //task 10: default: or
{
    let surname = prompt("Surname") || "Brown";
    let name = prompt("Name") || "John";
    let middleName = prompt("Middle Name") || "Donaldovych";
    alert(surname + " " + name + " " + middleName);
}
}

if(task === task11) {
    //task 11: default: if
{
    let surname = prompt("Surname");
    if(!surname) {
        surname = "Brown";
    }
    let name = prompt("Name");
    if (!name) {
        name = "John";
    }
    let middleName = prompt("Middle Name");
    if (!middleName) {
        middleName = "Donaldovych";
    }
    alert(surname + " " + name + " " + middleName);
}
}

if(task === task12) {
    //task 12: login and password
{
    const login = "admin";
    const password = "qwerty";
    let userLog = prompt("Login: ");
    let userPassword = prompt("Password: ");
    if(login !== userLog && password !== userPassword) {
        alert("Error! Incorrect login or password");
    }
    else {
        alert("Hello, " + userLog);
    }
}
}

if(task === task13) {
    //task 13: currency exchange
{
    let eur = "EUR";
    let usd = "USD";
    const rateUsdBuy = 37.15;
    const rateUsdSell = 37.5;
    const rateEurSell = 40.55;
    const rateEurBuy = 40;
    let exchange = prompt("USD or EUR");
    let sum = prompt("Sum:");
    let sumUah;
    if(exchange.toUpperCase() === eur) {
        sumUah = confirm("Buy - OK; Sell - Cancel") ? sum * rateEurBuy : sum * rateEurSell;
    }
    if(exchange.toUpperCase() === usd) {
        sumUah = confirm("Buy - OK; Sell - Cancel") ? sum * rateUsdBuy : sum * rateUsdSell;
    }
    alert(sumUah);
}
}

if(task === task14) {
//task 14: scissors
{
    let userAct = prompt("Rock, Scissors or Paper");
    let compAct = Math.random();
    // 0 - 0.33 => rock
    // 0.34 - 0.66 => scissors
    // 0.67 - 1 => paper
    if(userAct.toLocaleLowerCase() === "rock" && compAct <= 0.33) {
        alert("Computer: Rock");
        alert("Draw");
    }
    if(userAct.toLocaleLowerCase() === "rock" && compAct >= 0.34 && compAct <= 0.66) {
        alert("Computer: Scissors");
        alert("Win");
    }
    if(userAct.toLocaleLowerCase() === "rock" && compAct >= 0.67) {
        alert("Computer: Paper");
        alert("Fail");
    }
    if(userAct.toLocaleLowerCase() === "scissors" && compAct <= 0.33) {
        alert("Computer: Rock");
        alert("Fail");
    }
    if(userAct.toLocaleLowerCase() === "scissors" && compAct >= 0.34 && compAct <= 0.66) {
        alert("Computer: Scissors");
        alert("Draw");
    }
    if(userAct.toLocaleLowerCase() === "rock" && compAct >= 0.67) {
        alert("Computer: Paper");
        alert("Win");
    }
    if(userAct.toLocaleLowerCase() === "paper" && compAct <= 0.33) {
        alert("Computer: Rock");
        alert("Win");
    }
    if(userAct.toLocaleLowerCase() === "paper" && compAct >= 0.34 && compAct <= 0.66) {
        alert("Computer: Scissors");
        alert("Fail");
    }
    if(userAct.toLocaleLowerCase() === "paper" && compAct >= 0.67) {
        alert("Computer: Paper");
        alert("Draw");
    }
}
}
