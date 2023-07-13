//task 1: literals and task 2: literals expand
{
    var man = {
        name: "Oleksandr",
        surname: "Oleksandrov",
        age: 18,
        job: "developer",
        [prompt("Property 1")]: prompt("Property 1 value"),
        [prompt("Property 2")]: prompt("Property 2 value"),
        [prompt("Property 3")]: prompt("Property 3 value"),
        [prompt("Property 4")]: prompt("Property 4 value"),
    }
}

//task 3: literals copy
{
    const newObj = {
        [prompt('Property5')]: prompt('Property 5 value'),
        ...man
    }
}

//task 4: html tree
{
    var htmlTree = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: [
                            "Enter a data please:"
                        ]
                    },
                    {
                        tagName: 'br',
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name'
                        }
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname'
                        }
                    }
                ]
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'ok'
                        },
                        children: [
                            "OK"
                        ]
                    },
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'cancel'
                        },
                        children: [
                            "Cancel"
                        ]
                    }
                ]
            }
        ]
    }

    console.log(htmlTree.children[1].children[1].children[0]);
    console.log(htmlTree.children[0].children[3].attrs.id);
}

//task 5: parent
{
    for (const elem of htmlTree.children) {
        elem.parent = htmlTree;
    }

    for (const elem of htmlTree.children[0].children) {
        elem.parent = htmlTree.children[0]
    }

    for (const elem of htmlTree.children[1].children) {
        elem.parent = htmlTree.children[1]
    }
}

//task 6: change ok
{
    const attribute = prompt('Введіть назву атрибута:');
    const value = prompt('Введіть значення атрибута:');

    htmlTree.children[1].children[0].attrs[attribute] = value;
    alert(htmlTree.children[1].children[0].attrs[attribute]);
}

//task 7: destructure
{
    const { children: [{children: [{children: [spanText]}]}]} = htmlTree

    console.log(spanText);

}

//task 8: destruct array
{
    let arr = [1,2,3,4,5, "a", "b", "c"];
    let even = [];
    let odd = [];
    let letters = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
        else if(arr[i] % 2 === 1) {
            odd.push(arr[i]);
        }
        else {
            letters.push(arr[i]);
        }
    }

    console.log(even, odd, letters);
}

//task 9: destruct string
{
    let arr = [1, "abc"];

    const [number, [s1, s2, s3]] = arr;

    console.log(number, s1, s2, s3);
}


//task 10: destruct 2
{
    let obj = {name: 'Ivan',
    surname: 'Petrov',
    children: [{name: 'Maria'}, {name: 'Nikolay'}]}

    const {children: [{name: name1}, {name: name2}]} = obj;

    console.log(name1, name2);
}


//task 11: destruct 3
{
    let arr = [1,2,3,4, 5,6,7,10];

    const {"0": a, "1": b, length} = arr;

    console.log(a, b, length);
}

//task 12: copy delete
{
    let arr = [1,2,3,4, 5,6,7,10];

    const {"0": a, "1": b, length} = arr;

    console.log(a, b, length);
}


//task 13: currency real rate
{
    const from = prompt('From currency');
    const to = prompt('To currency');
    const amount = prompt('Sum');
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
        alert(`Converted ${from} to ${to}: ${amount * data.rates[from] * data.rates[to]}`)
    })
}

//task 14: crrency drop down
fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    const rates = data.rates;
    let select = "<select>";

    for (const currency in rates) {
      select += `<option value=${rates[currency]}>${currency}</option>`;
    }

    select += "</select>";

    document.write(select);
  })
  .catch((error) => {
    console.error("Error", error);
  });

  //task 15: currency table
  fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    const table = [[""]];
    const ratePairs = Object.entries(data.rates);
    table[0].push(...Object.keys(data.rates));
    for (let i = 0; i < ratePairs.length; i++) {
      const row = [ratePairs[i][0]];
      for (subRate in data.rates) {
        // row.push(ratePairs[i][1] * data.rates[subRate]);
        row.push(ratePairs[i][1] / data.rates[subRate]);
      }
      table.push(row);
    }

    let str =
      '<table style="border: 1px solid black; border-collapse: collapse;">';
    let i = 0;
    for (const array of table) {
      if (i % 2 === 0) {
        str += `<tr style="border: 1px solid black; border-collapse: collapse; background-color: aliceblue;">`;
      } else {
        str += `<tr style="border: 1px solid black; border-collapse: collapse; background-color: #c3d9ed;">`;
      }
      i++;
      for (const num of array) {
        str += `<td style="border: 1px solid black; border-collapse: collapse;">${num}</td>`;
      }
      str += "</tr>";
    }
    str += "</table>";

    document.write(str);
  });

  //task 16: form
  const car = {
    Name: "chevrolet chevelle malibu",
    Cylinders: 8,
    Displacement: 307,
    Horsepower: 130,
    Weight_in_lbs: 3504,
    Origin: "USA",
    in_production: true,
  };
  
  const form = document.createElement("form");
  
  form.style = "display: flex; flex-direction: column; row-gap: 16px;";
  
  for (const key in car) {
    const label = document.createElement("label");
    label.textContent = key;
    const input = document.createElement("input");
    switch (typeof car[key]) {
      case "number":
        input.type = "number";
        break;
      case "boolean":
        input.type = "checkbox";
        break;
      default:
        input.type = "text";
    }
  
    input[input.type === "checkbox" ? "checked" : "value"] = car[key];
  
    label.appendChild(input);
  
    form.appendChild(label);
  }
  
  document.body.appendChild(form);

  //task 17: table
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
  
  let table = '<table><thead style="background-color: gray"><tr>';
  const keys = [];
  
  for (const obj of data) {
    for (const key of Object.keys(obj)) {
      if (!keys.includes(key)) {
        table += `<th>${key}</th>`;
        keys.push(key);
      }
    }
  }
  
  table += "</tr></thead><tbody>";
  
  for (const obj of data) {
    table += "<tr>";
  
    for (const key of keys) {
      table += `<td>${obj[key] ?? ""}</td>`;
    }
  
    table += "</tr>";
  }
  
  table += "</tbody></table>";
  
  document.write(table);