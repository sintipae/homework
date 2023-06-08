//task 1: confirms
{
    let arr = [confirm("Do you like coffee?"), confirm("Are you male?"), confirm("Are you okay?")]
    console.log(arr);
}

//task 2: prompts
{
    let answ1 = confirm("Do you like coffee?");
    let answ2 = confirm("Are you male?");
    let answ3 = confirm("Are you okay?");

    let arr = [];
    arr[0] = answ1;
    arr[1] = answ2;
    arr[2] = answ3;
    console.log(arr);
}

//task 3: item access
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let i = prompt("Index");
    alert(arr[i]);
}

//task 4: item change
{
    let arr = [];
    let i = prompt("Index");
    let n = prompt("Value");

    arr[i] = n;
    alert(arr);
}

//task 5: multiply table
{
    const arr = [[0, 0, 0, 0, 0, 0], [0, 1, 2, 3, 4, 5], [0, 2, 4, 6, 8, 10], [0, 3, 6, 9, 12, 15], [0, 4, 8, 12, 16, 20], [0, 5, 10, 15, 20, 25]];

    let i1 = prompt("Index 1");
    let i2 = prompt("Index 2");

    alert(arr[i1][i2]);
}

//task 6: multiply table slice
{
    let arr = [[0, 0, 0, 0, 0, 0], [0, 1, 2, 3, 4, 5], [0, 2, 4, 6, 8, 10], [0, 3, 6, 9, 12, 15], [0, 4, 8, 12, 16, 20], [0, 5, 10, 15, 20, 25]];
    arr = arr.slice(1);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].slice(1);
    }

    alert(arr);
}

//task 7: indexOf word
{
    let str = prompt("Text");
    let arr = str.split(' ');
    
    let word = prompt("Word");
    if(arr.indexOf(word) !== -1) {
        alert(arr.indexOf(word));
    }
    else {
        alert("Error");
    }
}

//task 8: reverse
{
    let arr = [];
    for(let i = 0; i < 5; i++){
        arr.push(prompt("Number " + (i + 1)));
    }

    let arrRev = [];
    for (let i = 0; i < 5; i++){
        arrRev[i] = arr.pop();
    }

    alert(arrRev);
}

//task 9: reverse 2
{
    let arr = [];
    for(let i = 0; i < 5; i++){
        arr.unshift(prompt("Number " + (i + 1)));
    }

    let arrRev = [];
    for (let i = 0; i < 5; i++){
        arrRev[i] = arr.shift();
    }

    alert(arrRev);
}

//task 10: copy
{
    let arr = [[0, 0, 0, 0, 0, 0], [0, 1, 2, 3, 4, 5], [0, 2, 4, 6, 8, 10], [0, 3, 6, 9, 12, 15], [0, 4, 8, 12, 16, 20], [0, 5, 10, 15, 20, 25]];
    let copy = [...arr];

    console.log(copy);
}

//task 11: deep copy 
{
    let arr = [[0, 0, 0, 0, 0, 0], [0, 1, 2, 3, 4, 5], [0, 2, 4, 6, 8, 10], [0, 3, 6, 12, 15, 18], [0, 4, 8, 12, 16, 20], [0, 5, 10, 15, 20, 25]];
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let row = [];
        for( let j = 0; j < arr[i].length; j++){
            row.push(arr[i][j]);
        }
        result.push(row);
    }
    alert(result);
}

//task 12: array equals 
{
    const arr = [100, 100500];
    const arr2 = arr;
    console.log(arr === arr2);
}

//task 13: flat
{
    let arr = [[0, 0, 0, 0, 0, 0], [0, 1, 2, 3, 4, 5], [0, 2, 4, 6, 8, 10], [0, 3, 6, 12, 15, 18], [0, 4, 8, 12, 16, 20], [0, 5, 10, 15, 20, 25]];
    arr = arr.slice(1);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].slice(1);
    }
    
    let arr2 = [...arr[0], ...arr[1], ...arr[2], ...arr[3], ...arr[4]];

    console.log(arr2);
}

//task 14: destruct
{
    const str = prompt("String");
    const [first, , , , fifth, , , , ninth] = str;
    console.log(first, fifth, ninth);
}

//task 15: destruct default
{
    const str = prompt("String");
    const [, second = "b", , fourth = "d", fifth = "e"] = str;
    console.log(second, fourth, fifth);
}

//task 16: multiply table rest
{
    let arr = [[0, 0, 0, 0, 0, 0], [0, 1, 2, 3, 4, 5], [0, 2, 4, 6, 8, 10], [0, 3, 6, 12, 15, 18], [0, 4, 8, 12, 16, 20], [0, 5, 10, 15, 20, 25]];
    const [, ...slicedTable] = arr;
    for(let i = 0; i < slicedTable.length; i++) {
        [, ...slicedRow] = slicedTable[i];
        slicedTable[i] = slicedRow;
    }
    console.log(slicedTable);
}

//task 17: for alert
{
    const arr = ["John", "Paul", "George", "Ringo"];
    for (let name of arr){
        alert(name);
    }
}

//task 18: for select option
{
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let   str = "<select>";
    for (const currency of currencies){
        str += `<option>${currency}</option>`;
    }
    str += "</select>"
    document.write(str);
}

//task 19: for table horizontal
{
    const names = ["John", "Paul", "George", "Ringo"];
    let   str ="<table>";
    for (const name of names){
        str += `<th style="border: 1px solid black;">${name}</th>`;
    }
    str += "</table>";
    document.write(str);
}

//task 20: for table vertical
{
    const names = ["John", "Paul", "George", "Ringo"];
    let str = "<table>";
    for (const name of names) {
      str += `<tr><td style="border: 1px solid black;">${name}</td></tr>`;
    }
    str += "</table>";
    document.write(str);
}

//task 21: for table letters
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<table style=\"border: 1px solid black; border-collapse: collapse;\">"
    for (const currency of currencies){ 
        str += `<tr style="border: 1px solid black; border-collapse: collapse;"></tr>`;
        console.log(currency)
        for (const letter of currency){ 
            str += `<td style="border: 1px solid black; border-collapse: collapse;">${letter}</td>`;
            console.log(letter)
        }
    }
    str+= "</table>"
    document.write(str)
}

//task 22: for multiply table
{
    const arr = [[0, 0, 0, 0, 0, 0], [0, 1, 2, 3, 4, 5], [0, 2, 4, 6, 8, 10], [0, 3, 6, 9, 12, 15], [0, 4, 8, 12, 16, 20], [0, 5, 10, 15, 20, 25]];
    let   str = "<table style=\"border: 1px solid black; border-collapse: collapse;\">"
    let i = 0;
    for (const array of arr){ 
        if (i % 2 === 0){
            str += `<tr style="border: 1px solid black; border-collapse: collapse; background-color: blue;">`;
        }
        else {
            str += `<tr style="border: 1px solid black; border-collapse: collapse; background-color: red;">`;
        }
        console.log(array);
        i++;
        for (const num of array){ 
            str += `<td style="border: 1px solid black; border-collapse: collapse;">${num}</td>`;
            console.log(num);
        }
    }
    str += "</tr>";
    str+= "</table>";
    document.write(str);
}

//task 23: function capitalize

    const capitalize = str => {
        let result;
        let first = str.slice(0, 1).toUpperCase();
        result = first + str.slice(1, str.length).toLowerCase();
        
        return result;
   }
   console.log(capitalize("cANBerRa")) //Canberra


//task 24: map capitalize
{
    const prmpt = prompt("Enter text");
    const arr = prmpt.split(" ");
    
    const string = arr.map(capitalize);
    const str = string.join();
    const result = str.replace(new RegExp(",", "g"), " ");

    alert(result);
}

//task 25: filter lexics
{
    const str = prompt("Enter");
    const arr = str.split(" ");
    const badWords = ["beach", "fork", "sheet"];

    function checkBadWords(word) {
        return !badWords.includes(word);
    }

    const array = arr.filter(checkBadWords);
    const res = array.join();
    const result = res.replace(new RegExp(",", "g"), " ");
    alert(result);
}

//task 26: beep lexics
{
    const input = prompt("String");
    const badWords = ["beach", "fork", "sheet"];

    function censorWords(inputString, badWords) {
        const words = inputString.split(" ");
        const bad = (word) => badWords.includes(word);
        const censorWord = (word) => (bad(word) ? "BEEP" : word);
        const censoredWords = words.map(censorWord);
        const censoredString = censoredWords.join(" ");
      
        return censoredString;
    }

    const result = censorWords(input, badWords);
    alert(result);
}

//task 27: reduce html
{
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<select>";
    str += currencies.reduce((a, b) => a + `<option>${b}</option>`, "");
    str += "</select>";

    document.write(str);
}

//task 28: for brackets hell check
{
    const line = prompt();
    const bracketsStack = [];
    let i = 0;

    for (const character of line) {
        if (character === "[" || character === "(" || character === "{") {
            bracketsStack.push(character);
        } 
        else if (character === "]" || character === ")" || character === "}") {
            if (bracketsStack.length === 0) {
            alert("Error: Wrong closing bracket");
            alert("Position: " + i);
            break;
            }

            const lastOpeningBracket = bracketsStack.pop();

            if ((character === "]" && lastOpeningBracket !== "[") || (character === ")" && lastOpeningBracket !== "(") || (character === "}" && lastOpeningBracket !== "{")) {
            alert("Error: Wrong match");
            alert("Position: " + i);
            break;
            }
        }
        i++;
    }

    if (bracketsStack.length === 0) {
    alert("Correct!");
    } 
    else {
    alert("Error: Wrong opening bracket");
    alert("Positon: " + i);
    }
}