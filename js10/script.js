//task 1: arrow to function
function temperature(a) {
  let res = a * 1.8 + 32;
  return res;
}
console.log(temperature(10));

function rgb(r, g, b) {
  function toHex(a) {
    const hex = a.toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
  }
  const red = toHex(r);
  const green = toHex(g);
  const blue = toHex(b);

  return `#${red}${green}${blue}`;
}

console.log(rgb(+prompt("Red"), +prompt("Green"), +prompt("Blue")));

function flats(floors, flats, flatNumber) {
  let allFlats = floors * flats;
  let entrance = Math.ceil(flatNumber / flats / floors);
  let floorNum = Math.ceil((flatNumber % allFlats) / flats);

  return { entrance, floorNum };
}
console.log(flats(+prompt("Floors"), +prompt("Flats"), +prompt("Flat number")));

function newLine(str) {
  let string = str.split("\\n").join("\n");
  return string;
}
alert(newLine(prompt("String:")));

function logPass(login, password) {
  const log = prompt("enter the login");
  const pass = prompt("Enter the password");

  if (log === login && pass === password) {
    alert(`Hello, ${login}`);
  } else {
    alert("Wrong!");
  }
  return;
}
logPass("admin", "qwerty");

//task 2: create person
function createPerson(name, surname) {
  return { name, surname, getFullName };
}

function getFullName() {
  return `${this.name}${this.fatherName ? " " + this.fatherName : ""} ${
    this.surname
  }`;
}

const a = createPerson("Вася", "Пупкін");
const b = createPerson("Ганна", "Іванова");
const c = createPerson("Єлизавета", "Петрова");

console.log(a.getFullName()); //Вася Пупкін
a.fatherName = "Іванович";
console.log(a.getFullName()); //Вася Іванович Пупкін

console.log(b.getFullName()); //Ганна Іванова

//task 3: createPersonClosure
function createPersonClosure(name, surname) {
  let age;
  let fatherName;
  function getName() {
    return name;
  }

  function getSurname() {
    return surname;
  }

  function getFatherName() {
    return fatherName;
  }

  function getAge() {
    return age;
  }

  function getFullName() {
    return `${surname ?? ""}${name ? " " + name : ""}${fatherName ? " " + fatherName : ""}`;
  }

  function setName(newName) {
    if (newName[0] === newName[0].toUpperCase()) {
      name = newName;
    }
    return;
  }

  function setSurname(newSurname) {
    if (newSurname[0] === newSurname[0].toUpperCase()) {
      surname = newSurname;
    }
    return;
  }

  function setFatherName(newFatherName) {
    if (newFatherName[0] === newFatherName[0].toUpperCase()) {
      fatherName = newFatherName;
    }
    return;
  }

  function setAge(newAge) {
    if (newAge >= 0 && newAge < 100) {
      age = newAge;
    }
    return;
  }

  function setFullName(newFullName) {
    let fullName = newFullName.split(" ");
    surname = fullName[0];
    name = fullName[1];
    fatherName = fullName[2];
    return;
  }

  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  };
}

const v = createPersonClosure("Вася", "Пупкін");
const d = createPersonClosure("Ганна", "Іванова");
console.log(v.getName());
v.setAge(15);
v.setAge(150); //не працює

d.setFullName("Петрова Ганна Миколаївна");
console.log(d.getFatherName()); //Миколаївна

//task 4: createPersonClosureDestruct

function createPersonClosureDestruct({
  name = "",
  surname = "",
  fatherName = "",
  age = 15,
}) {
  function getName() {
    return name;
  }

  function getSurname() {
    return surname;
  }

  function getFatherName() {
    return fatherName;
  }

  function getAge() {
    return age;
  }

  function getFullName() {
    return `${surname} ${name} ${fatherName}`;
  }

  function setName(newName) {
    if (newName[0] === newName[0].toUpperCase()) {
      name = newName;
    }
    return name;
  }

  function setSurname(newSurname) {
    if (newSurname[0] === newSurname[0].toUpperCase()) {
      surname = newSurname;
    }
    return surname;
  }

  function setFatherName(newFatherName) {
    if (newFatherName[0] === newFatherName[0].toUpperCase()) {
      fatherName = newFatherName;
    }
    return fatherName;
  }

  function setAge(newAge) {
    if (newAge >= 0 && newAge < 100) {
      age = newAge;
    }
    return age;
  }

  function setFullName(newFullName) {
    let fullName = newFullName.split(" ");
    surname = fullName[0];
    name = fullName[1];
    fatherName = fullName[2];
    return `${surname} ${name} ${fatherName}`;
  }

  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  };
}

const q = createPersonClosureDestruct(createPerson("Вася Пупкін"));
const w = createPersonClosureDestruct({ name: "Миколай", age: 75 });

console.log(w.getFullName());
console.log(q.getFullName());

//task 4: isSorted
function isSorted(...rest) {
  console.log(rest);
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] >= rest[i + 1]) {
      break;
    }

    if (i === rest.length - 1) {
      return true;
    }
  }

  return false;
}

console.log(isSorted(1, 2, 6, 4, 5));

//task 5: test isSorted
function arrayFill() {
  let arr = [];
  let num;
  while ((num = +prompt("Number"))) {
    arr.push(num);
  }
  return arr;
}

console.log(isSorted(...arrayFill()));

//task 6: personForm
function personForm(element, obj) {
  const form = document.createElement("form");

  const updateInputValues = () => {
    const inputs = form.querySelectorAll("input");

    for (const inputElement of inputs) {
      inputElement.value =
        obj[`get${inputElement.id.slice(0, 1).toUpperCase() + inputElement.id.slice(1)}`]();
    }
  };

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.value = obj.getName();
  nameInput.addEventListener("change", (e) => {
    obj.setName(e.target.value);
    updateInputValues();
  });
  form.appendChild(nameInput);

  const surnameInput = document.createElement("input");
  surnameInput.type = "text";
  surnameInput.id = "surname";
  surnameInput.value = obj.getSurname();
  surnameInput.addEventListener("change", (e) => {
    obj.setSurname(e.target.value);
    updateInputValues();
  });
  form.appendChild(surnameInput);

  const fatherNameInput = document.createElement("input");
  fatherNameInput.type = "text";
  fatherNameInput.id = "fatherName";
  fatherNameInput.value = obj.getFatherName();
  fatherNameInput.addEventListener("change", (e) => {
    obj.setFatherName(e.target.value);
    updateInputValues();
  });
  form.appendChild(fatherNameInput);

  const ageInput = document.createElement("input");
  ageInput.type = "number";
  ageInput.id = "age";
  ageInput.value = obj.getAge();
  ageInput.addEventListener("change", (e) => {
    obj.setAge(e.target.value);
    updateInputValues();
  });
  form.appendChild(ageInput);

  const fullNameInput = document.createElement("input");
  fullNameInput.type = "text";
  fullNameInput.id = "fullName";
  fullNameInput.value = obj.getFullName();
  fullNameInput.addEventListener("change", (e) => {
    obj.setFullName(e.target.value);
    updateInputValues();
  });

  form.appendChild(nameInput);
  form.appendChild(surnameInput);
  form.appendChild(fatherNameInput);
  form.appendChild(ageInput);
  form.appendChild(fullNameInput);

  element.appendChild(form);
}
//     form.appendChild(nameInput);
//     form.appendChild(surnameInput)
//     form.appendChild(fatherNameInput)
//     form.appendChild(ageInput)
//     form.appendChild(fullNameInput)

//     element.appendChild(form);
// }

const g = createPersonClosure("Ганна", "Іванова");
g.setAge(15);
g.setFullName("Петрова Ганна Миколаївна");

// const formContainer = document.getElementById("form-container");
// personForm(formContainer, g);


//task 7: personForm

let car;
{
    let brand = 'BMW', model = 'X5', volume = 2.4
    car = {
        getBrand(){
            return brand
        },
        setBrand(newBrand){
            if (newBrand && typeof newBrand === 'string'){
                brand = newBrand
            }
            return brand
        },
        
        getModel(){
            return model
        },
        setModel(newModel){
            if (newModel && typeof newModel === 'string'){
                model = newModel
            }
            return model
        },
        
        getVolume(){
            return volume
        },
        setVolume(newVolume){
            newVolume = +newVolume
            if (newVolume && newVolume > 0 && newVolume < 20){
                volume = newVolume
            }
            return volume
        },
        
        getTax(){
            return volume * 100
        }
    }
}

function getSetForm(parent, getSet){
  const form = document.createElement('form');
  const inputs = {} //реєстр

  const updateInputs = () => { //функція оновлення полів введення відповідно до будь-яких get....
    for (const key in inputs) {
      const inputElement = inputs[key];
      const value = getSet[`get${inputElement.id}`]();
      if (typeof value === "boolean") {
        inputElement.checked = value;
      } else {
        inputElement.value = value ?? ""
      }
    }
  }

  for (const getSetName in getSet){
    const getOrSet = getSetName.slice(0, 3);
    const fieldName = getSetName.slice(3);
    const setKey    = `set${fieldName}`;
    const getKey    = `get${fieldName}`;

    if (!inputs[fieldName]) {
      const newInput = document.createElement('input');
      newInput.id = fieldName;
      console.log(getKey);
      const fieldValue = getSet[getKey]();
      switch (typeof fieldValue) {
        case "number":
          newInput.type = "number";
          break;
        case "boolean":
          newInput.type = "checkbox";
          break;
        default:
          newInput.type = "text";
      }

      if (!getSet[setKey]) {
        newInput.disabled = true;
      }

      inputs[fieldName] = newInput;
      newInput.addEventListener("change", e => {
        getSet[`set${e.target.id}`](e.target.value);
        updateInputs();
      })
      form.appendChild(newInput)
    }
    
    //допишіть тут все, що треба, і не тільки тут
  }
  updateInputs()
  document.body.appendChild(form);
}

// getSetForm(document.body, car)
getSetForm(document.body, createPersonClosure('Анон', "Анонов"))