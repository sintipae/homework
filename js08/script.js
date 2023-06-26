//task 1: comparison if
{
    var age = + prompt ("Скільки вам років?", "");
    if (age > 0 && age < 18) {
        alert("школяр");
    }
    else {
        if (age > 18 && age < 30){
            alert("молодь");
        }
        else {
            if (age > 30 && age < 45){
                alert("зрілість");
            }
            else {
                if (age > 45 && age < 60){
                    alert("захід сонця");
                }
                else {
                    if (age > 60) {
                        alert("як пенсія?");
                    }
                    else {
                        if (age <= 0) {
                            alert("треба народитись")
                        }
                        else {
                            alert("чи кіборг, чи KERNESS");
                        }
                    }
                } 
            } 
        } 
    } 
}

//task 2: switch sizes
{
    const waist = +prompt("Waist");
    switch (waist) {
        case 63:
            console.log("Your international size: XXS");
            break;
            case 64:
                console.log("Your international size: XXS");
                break;
                case 65:
                    console.log("Your international size: XXS");
                    break;
        case 66:
            console.log("Your international size: XS");
            break;
            case 67:
                console.log("Your international size: XS");
                break;
                case 68:
                    console.log("Your international size: XS");
                    break;
                    case 69:
                        console.log("Your international size: XS");
                        break;
        case 70:
            console.log("Your international size: S");
            break;
            case 71:
                console.log("Your international size: S");
                break;
                case 72:
                    console.log("Your international size: S");
                    break;
                    case 73:
                        console.log("Your international size: S");
                        break;
                        case 74:
                            console.log("Your international size: S");
                            break;
        case 75:
            console.log("Your international size: M");
            break;
            case 76:
                console.log("Your international size: M");
                break;
                case 77:
                    console.log("Your international size: M");
                    break;
                    case 78:
                        console.log("Your international size: M");
                        break;
        case 79:
            console.log("Your international size: L");
            break;
            case 80:
                console.log("Your international size: L");
                break;
                case 82:
                    console.log("Your international size: L");
                    break;
                    case 82:
                        console.log("Your international size: L");
                        break;
                        case 83:
                            console.log("Your international size: L");
                            break;
        case 84:
            console.log("Your international size: XL");
            break;
            case 85:
                console.log("Your international size: XL");
                break;
                case 86:
                    console.log("Your international size: XL");
                    break;
                    case 87:
                        console.log("Your international size: XL");
                        break;
                        case 88:
                            console.log("Your international size: XL");
                            break;
                            case 89:
                                console.log("Your international size: XL");
                                break;
        case 90:
            console.log("Your international size: XXL");
            break;
            case 91:
                console.log("Your international size: XXL");
                break;
                case 92:
                    console.log("Your international size: XXL");
                    break;
                    case 93:
                        console.log("Your international size: XXL");
                        break;
                        case 94:
                            console.log("Your international size: XXL");
                            break;
        case 95:
            console.log("Your international size: XXXL");
            break;
            case 96:
                console.log("Your international size: XXXL");
                break;
                case 97:-1
                    console.log("Your international size: XXXL");
                    break;
        default:
            console.log("ну ок");
    }
}

//task 3: switch if
{
    let color = prompt("Введіть колір","");
    if (color === "red") {
        document.write("<div style='background-color: red;'>червоний</div>");
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    }
    else if (color === "black") {
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    }
    else if (color === "blue") {
        document.write("<div style='background-color: blue;'>синій</div>");
        document.write("<div style='background-color: green;'>зелений</div>");
    }
    else if (color === "green") {
        document.write("<div style='background-color: green;'>зелений</div>");
    }
    else {
        document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
    }
}

//task 4: noswitch
  const noSwitch = (key, cases, defaultKey = 'default') => {
    if (key in cases) {
      return cases[key]();
    } else if (defaultKey in cases) {
      return cases[defaultKey]();
    }
  };
  
  const drink = prompt("Що ви любите пити");
  noSwitch(drink, {
    воду: () => console.log('Найздоровіший вибір!'),
    чай() {
      console.log('Смачна та корисна штука. Не перестарайтеся з цукром');
    },
    "пиво": () => console.log('Добре влітку, та в міру'),
    віскі: function () {
      console.log('Та ви, батечку, естет! Не забудьте лід і сигару');
    },
    default() {
      console.log('шото я не зрозумів');
    }
  });

//task 5: closure calc

    fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        const rates = data.rates;
        const container = document.getElementById('currency-buttons');

        for (const currency in rates) {
            const button = document.createElement('button');
            button.innerText = currency;
            button.onclick = () => {
                const amount = parseFloat(prompt('Sum'));
                if (!isNaN(amount)) {
                    const convertedAmount = amount / rates[currency];
                    console.log(`${amount} ${currency} = ${convertedAmount.toFixed(2)} USD`);
                } 
                else {
                    console.log('Invalid sum');
                }
            };

            container.appendChild(button);
        }
    })
    .catch(error => {
        console.log('Error', error);
    });

//task 6: closure calc 2
{
    const rates = {
        USD: 1.22,
        EUR: 1.09,
        GBP: 0.88
    };
  
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    const rateDiv = document.getElementById('rate');
    const amountInput = document.getElementById('amount');
    const resultDiv = document.getElementById('result');
  
    for (const currency in rates) {
        const fromOption = document.createElement('option');
        fromOption.innerText = currency;
        fromSelect.appendChild(fromOption);
  
        const toOption = document.createElement('option');
        toOption.innerText = currency;
        toSelect.appendChild(toOption);
    }
  
    fromSelect.onchange = updateConversion;
    toSelect.onchange = updateConversion;
    amountInput.oninput = updateConversion;
  
    function updateConversion() {
        const fromCurrency = fromSelect.value;
        const toCurrency = toSelect.value;
        const rate = rates[toCurrency] / rates[fromCurrency];
  
        rateDiv.innerText = `Курс: 1 ${fromCurrency} = ${rate.toFixed(2)} ${toCurrency}`;
  
        const amount = parseFloat(amountInput.value);
        const convertedAmount = isNaN(amount) ? 0 : amount * rate;
  
        resultDiv.innerText = `Результат: ${convertedAmount.toFixed(2)} ${toCurrency}`;
    }
}

//task 7: countries and cities
{
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
      .then(res => res.json())
      .then(data => {
        const countriesSelect = document.getElementById('countries');
        const citiesSelect = document.getElementById('cities');

        for (const country in data) {
          const countryOption = document.createElement('option');
          countryOption.innerText = country;
          countriesSelect.appendChild(countryOption);
        }

        countriesSelect.onchange = function() {
          const selectedCountry = countriesSelect.value;
          citiesSelect.innerHTML = '';

          if (data[selectedCountry]) {
            const cities = data[selectedCountry];

            for (const city of cities) {
              const cityOption = document.createElement('option');
              cityOption.innerText = city;
              citiesSelect.appendChild(cityOption);
            }
          }
        };
      })
      .catch(error => console.log(error));
}

  