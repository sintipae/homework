//task 1: while confirm
{
    let i = 0;
    while(!confirm("Cancel?")) {
        i++;
    }
    alert(`Only ${i} times((`)
}

//task 2: array fill
{
    let arr = [];
    let num;
    while(num = +prompt("Number")) {
        arr.push(num);
    }
    console.log(arr);
}

//task 3: array fill nopush
{
    let arr = [];
    let index = 0;
    while (num = +prompt("Number")) {
        arr[index] = num;
        index++;
    }
    console.log(arr);
}

//task 4: infinite propapility
{
    let a;
    let i = 0;
    while (a = Math.random()) {
        i++;
        if(a > 0.9) {
            alert(`${i} iterations`);
            break;
        }
    }
}

//task 5: empty loop
{
    for (let text = prompt("Перервати?"); !text && text !== ""; text = prompt("Перервати?")) {

    }
}

//task 6: progression sum
{
    let n = 20;
    let sum = 0;
    for(let i = 1; i <= n; i += 3) {
        sum += i;
    }
    alert(sum);
}

//task 7: chess one line ???????
{
    let arr = [];
    let grid = "#";
    let i = prompt("Amount");
    for(let j = 0; j < i; j++) {
        arr.push(grid, " "); 
    }

    if(arr.length % 2 === 1) {
        arr.pop();
    }

    let str = arr.toString().split(",").join("");

    console.log(str);
}

//task 8: numbers
{
    let arr = [];
    let str = "";
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            arr.push(j);
        }
        str += arr.join("") + "\n";
        arr = [];
    }
    console.log(str);
}

//task 9: chess
{
    let rows = +prompt("Rows");
    let columns = +prompt("Columns");
    let arr = [];
    let str = "";
    let even = ".#";
    let odd = "#.";
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if (i % 2 === 0) {
                arr.push(even);
            }
            else {
                arr.push(odd);
            }
        }
        str += arr.join("") + "\n";
        arr = [];
    }
    console.log(str);
}

//task 10: cubes
{
    let arr = [];
    let length = prompt("Length");
    for(let i = 0; i < length; i++){
        arr.push(i ** 3);
    }
    console.log(arr);
}

//task 11: multiply table
{
    let arr = [];
    let table = [];
    for(let i = 1; i < 10; i++) {
        arr[i] = [];
        for(let j = 1; j < 10; j++) {
            arr[i].push(i * j);
        }
        table.push(arr[i]);
    }
    console.log(table);
}

//task 12: read array of objects
const readArrayOfObjects = () => {
    const objects = [];
  
    while (true) {
        const object = {};
        let input = true;
  
        while (input) {
            const key = prompt("Key");
            if (key === null) {
            input = false;
            break;
            }
  
            const value = prompt("Value");
            if (value === null) {
            input = false;
            break;
            }
  
            object[key] = value;
        }
  
        objects.push(object);
    
        const cont = confirm("Continue?");
        if (!cont) {
            break;
        }
    }
  
    return objects;
}
  
const arrayOfObjects = readArrayOfObjects();
console.log(arrayOfObjects);

//task 13: rombik
{
    const size = +prompt("Size"); 
    for (let i = 1; i <= size; i++) {
      let row = '';
    
      for (let j = 1; j <= size - i; j++) {
        row += '.';
      }
    
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += '#';
      }

      for (let n = 1; n <= size - i; n++) {
        row += '.';
      }
    
      console.log(row);
    }
    for (let i = size - 1; i >= 1; i--) {
      let row = '';
    
      for (let j = 1; j <= size - i; j++) {
        row += '.';
      }
    
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += '#';
      }

      for (let n = 1; n <= size - i; n++) {
        row += '.';
      }
    
      console.log(row);
    }
}

//task 14: dom: multiply table
{
    let arr = [];
    for (let i = 0; i <= 9; i++) {
        let row = [];
        for (let j = 0; j <= 9; j++) {
            if(i * j === 0) {
                i === 0 ? row.push(j) : row.push(i);
                continue;
            }
            row.push(j * i);
        }
        arr.push(row);
    }

    const table = document.getElementById("table");

    for (let i = 0; i < arr.length; i++) {
        const rowElement = document.createElement('tr');
        for (let j = 0; j < arr[i].length; j++) {
            const numberElement = document.createElement('td');
            numberElement.innerText = arr[i][j];
            rowElement.appendChild(numberElement);
        }
        table.appendChild(rowElement);
    }
}

//task 15: dom: multiply table
{
    const table = document.getElementById("table");
    const rows = table.getElementsByTagName('tr');

    for (const row of rows) {
        const numberElements = row.getElementsByTagName('td');
        for (const numberElement of numberElements) {
            numberElement.addEventListener('mouseover', () => {
                if (!numberElement.classList.contains('hovered')) {
                    numberElement.classList.add('hovered');
                }
            });
            numberElement.addEventListener('mouseleave', () => {
                numberElement.classList.remove('hovered');
            });
        }
    }
}


// task 16: dom: multiply table
{
    const table = document.getElementById("table");
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        for (let j = 0; j < cells.length; j++) {
            cells[j].addEventListener('mouseover', () => {
                if (!rows[i].classList.contains('hovered')) {
                    for (const row of rows) {
                        const rowElements = row.getElementsByTagName('td');
                        rowElements[j].classList.add('hovered');
                    }
                    rows[i].classList.add('hovered');
                }
            })

            cells[j].addEventListener('mouseleave', () => {
                for (const row of rows) {
                    const rowElements = row.getElementsByTagName('td');
                    rowElements[j].classList.remove('hovered');
                }
                rows[i].classList.remove('hovered');
            })
        }
    }
}