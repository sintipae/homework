//task 1: temperature
const Temperature = (a) => a * 1.8 + 32;
alert(Temperature(10));

//task 2: rgb
const Rgb = (r, g, b) => {
    const toHex = (a) => {
        const hex = a.toString(16).toUpperCase();
        return hex.length === 1 ? '0' + hex : hex;
    };
    const red = toHex(r);
    const green = toHex(g);
    const blue = toHex(b);

    return `#${red}${green}${blue}`;
}

alert(Rgb(+prompt("Red"), +prompt("Green"), +prompt("Blue")));

//task 3: flats 
const Flats = (floors, flats, flatNumber) => {
    let allFlats = floors * flats;
    let entrance = Math.ceil(flatNumber / flats / floors);
    let floorNum = Math.ceil(flatNumber % allFlats / flats);

    return {entrance, floorNum};
}
console.log(Flats(+prompt("Floors"), +prompt("Flats"), +prompt("Flat number")));

//task 4: credentials
const Credentials = () => {
    const Capitalize = str => {
        let result;
        let first = str.slice(0, 1).toUpperCase();
        result = first + str.slice(1, str.length).toLowerCase();
        
        return result;
   }

    let name = Capitalize(prompt("Enter your name: ").trim());
    let surname = Capitalize(prompt("Enter your surname: ").trim());
    let middleName = Capitalize(prompt("Enter your middle name: ").trim());

   const fullName = surname + ' ' + name + ' ' + middleName;

   return {
    name,
    surname,
    middleName,
    fullName
   };

}

console.log(Credentials());

//task 5: new line
const newLine = (str) => {
    let string = str.split("\\n").join("\n");
    return string;
}
alert(newLine(prompt("String:")));

//task 6: prompt or
const PromptOr = (text, defaultValue) => prompt(text) || defaultValue;
alert(PromptOr("Enter your age", 16));

//task 7: login and pasword
const logPass = (login, password) => {
    const log = prompt("enter the login");
    const pass = prompt("Enter the password");

    if (log === login && pass === password) {
        alert(`Hello, ${login}`);
    }
    else {
        alert("Wrong!");
    }
}
logPass("admin", "qwerty");

//task 8: for table
const multiplyTable = (arr) => {
    let str = "<table style=\"border: 1px solid black; border-collapse: collapse;\">"
    let i = 0;
    for (const array of arr){ 
        if (i % 2 === 0){
            str += `<tr style="border: 1px solid black; border-collapse: collapse; background-color: aliceblue;">`;
        }
        else {
            str += `<tr style="border: 1px solid black; border-collapse: collapse; background-color: #c3d9ed;">`;
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

multiplyTable([[0, 0, 0, 0, 0, 0], [0, 1, 2, 3, 4, 5], [0, 2, 4, 6, 8, 10], [0, 3, 6, 9, 12, 15], [0, 4, 8, 12, 16, 20], [0, 5, 10, 15, 20, 25]]);

//task 9: filter lexics
const filterLexics = (str) => {
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
filterLexics(prompt("String:"));

//task 10: currency table

// const currencyTable = () => {
//     fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//     .then(data => {
//         const table = [['']];
//         const ratePairs = Object.entries(data.rates)
//         table[0].push(...Object.keys(data.rates));
//         for (let i = 0; i < ratePairs.length; i++) {
//             const row = [ratePairs[i][0]];
//             for (subRate in data.rates) {
//                 row.push(ratePairs[i][1] * data.rates[subRate]);
//             }
//             table.push(row);
//         }
        
//         console.log(table);
//         multiplyTable(table);
//     })
// }

// currencyTable();


//task 11: form
const car = {
    "Name":"chevrolet chevelle malibu",
    "Cylinders":8,
    "Displacement":307,
    "Horsepower":130,
    "Weight_in_lbs":3504,
    "Origin":"USA",
    "in_production": false
}
const Form = (obj) => {
    const form = document.getElementById("form");
    for (key of Object.keys(obj)) {
      const label = document.createElement("label");
      const input = document.createElement("input");
  
      label.innerText = key;
  
      switch (typeof obj[key]) {
        case "number":
          input.type = "text";
          break;
        case "boolean":
          input.type = "checkbox";
          break;
        default:
          input.type = "text";
          break;
      }
  
      input.value = obj[key];
      label.appendChild(input);
      form.appendChild(label);
    }
  }
Form(car);

//task 12: array of objects sort
const sort = (array, field, ascending = true) => {
    array.sort((a, b) => {
      if (a[field] < b[field]) {
        return ascending ? -1 : 1;
      }
      if (a[field] > b[field]) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
  };

  const persons = [
    {name: "Іван", age: 17},
    {name: "Марія", age: 35},
    {name: "Олексій", age: 73},
    {name: "Яків", age: 12}
  ];
  
  sort(persons, "age", true); 
  console.log(persons);
  
  sort(persons, "name", false); 
  console.log(persons);


//task 13: table
const data = [
    {
      Name: "chevrolet chevelle malibu",
      Cylinders: 8,
      Displacement: 307,
      Horsepower: 130,
      Weight_in_lbs: 3504,
      Origin: "USA",
    },
    {
      Name: "buick skylark 320",
      Miles_per_Gallon: 15,
      Cylinders: 8,
      Displacement: 350,
      Horsepower: 165,
      Weight_in_lbs: 3693,
      Acceleration: 11.5,
      Year: "1970-01-01",
    },
    {
      Miles_per_Gallon: 18,
      Cylinders: 8,
      Displacement: 318,
      Horsepower: 150,
      Weight_in_lbs: 3436,
      Year: "1970-01-01",
      Origin: "USA",
    },
    {
      Name: "amc rebel sst",
      Miles_per_Gallon: 16,
      Cylinders: 8,
      Displacement: 304,
      Horsepower: 150,
      Year: "1970-01-01",
      Origin: "USA",
    },
  ];
  
  const createTable = (initArr, key, direction) => {
    const objArr = [...initArr];
    objArr.sort(function (a, b) {
      if (a[key] > b[key]) {
        return direction === "ASC" ? 1 : -1;
      }
      if (b[key] > a[key]) {
        return direction === "ASC" ? -1 : 1;
      }
      return 0;
    });
    const tableHead = document.getElementById("table-head");
    const tableBody = document.getElementById("table-body");
    const keys = [];
  
    const head = document.createElement("tr");
    for (const obj of objArr) {
      for (const key of Object.keys(obj)) {
        if (!keys.includes(key)) {
          const title = document.createElement("th");
          title.innerText = key;
          head.appendChild(title);
          keys.push(key);
        }
      }
    }
    tableHead.appendChild(head);
  
    for (const obj of objArr) {
      const row = document.createElement("tr");
  
      for (const key of keys) {
        const cell = document.createElement("td");
        cell.innerText = obj[key] ?? "";
        row.appendChild(cell);
      }
  
      tableBody.appendChild(row);
    }
  };
  
  createTable(data, "Miles_per_Gallon", "DESC");

//task 14: divide
const calcResult = () => {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    const divisionResult = document.getElementById('divisionResult');

    if (secondNumber !== '0') {
        const result = Math.floor(firstNumber / secondNumber);
        divisionResult.innerHTML = `Результат: ${result}`;
    } 
    else {
        divisionResult.innerHTML = 'Ділення на нуль неможливе';
    }
}

document.getElementById('firstNumber').oninput = calcResult;
document.getElementById('secondNumber').oninput = calcResult;

//task 15: calc func
const Calc = (math, phisics, english) => {
    const mathCoef = 0.5;
    const phisCoef = 0.3;
    const englishCoef = 0.2;

    const result = (math * mathCoef + phisics * phisCoef + english * englishCoef);

    return result;
}

const mathGrade = +prompt("Math");
const phisicsGrade = +prompt("Phisics");
const englishGrade = +prompt("English");

console.log(Calc(mathGrade, phisicsGrade, englishGrade));

//task 16: calc live
const calcRes = () => {
    const math = +document.getElementById("math").value;
    const physics = +document.getElementById("physics").value;
    const english = +document.getElementById("english").value;

    const mathCoef = 0.5;
    const physicsCoef = 0.3;
    const englishCoef = 0.2;

    const result = (math * mathCoef + physics * physicsCoef + english * englishCoef);

    return result;
}

const Calculate = () => {
    const result = calcRes();
    document.getElementById("result").innerHTML = "Result: " + result;
}
