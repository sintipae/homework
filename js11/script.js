//task 1: makeProfileTimer
function makeProfileTimer() {
    const start = performance.now();
  
    return function() {
        const end = performance.now();
        return end - start;
    }
}

const timer = makeProfileTimer()  
    alert('Вимiрюємо час роботи цього alert');  
    alert(timer()); 
                   
    const timer2 = makeProfileTimer()
    prompt('')
    alert(`Час роботи двух аlert та одного prompt ${timer()}`)
    alert(`Час роботи prompt та попереднього alert ${timer2()}`)

//task 2: makeSaver
function makeSaver(func) {
    let result;

    return function() {
        if (!result) {
            result = func();
        }
    return result;
    }
}
let saver = makeSaver(Math.random) 
                                    
let value1 = saver()            
let value2 = saver()            
                                    
alert(`Random: ${value1} === ${value2}`)

let saver2 = makeSaver(() => {
    console.log('saved function called');
    return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random()*6)]
})
let value3 = saver2()
let value4 = saver2()

value3 === value4 
    
let namePrompt = prompt.bind(window, 'Як тебе звуть?')
let nameSaver = makeSaver(namePrompt)
alert(`Привіт! Prompt ще не було!`)
alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`)
alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`)

//task 3: myBind
function myBind(fn, thisValue, defaultArgs) {
    return function (...args) {
      let argIndex = 0;
      const updatedArgs = defaultArgs.map((arg, index) => {
        return arg === undefined ? args[argIndex++] : arg;
      });
  
      return fn.apply(thisValue, updatedArgs.concat(args.slice(argIndex)));
    };
}

let pow5 = myBind(Math.pow, Math, [undefined, 5]);
console.log(pow5(2)); // 32
console.log(pow5(4)); // 1024

let cube = myBind(Math.pow, Math, [undefined, 3]);
console.log(cube(3)); // 27

let chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5, undefined, 8, undefined, 9]);
console.log(chessMin(-1, -5, 3, 15)); // -5

let zeroPrompt = myBind(prompt, window, [undefined, "0"]);
let someNumber = zeroPrompt("Введіть число");
console.log(someNumber);

const bindedJoiner = myBind((...params) => params.join(''), null, [undefined, 'b', undefined, undefined, 'e', 'f']);
console.log(bindedJoiner('a', 'c', 'd') === 'abcdef');
console.log(bindedJoiner('1', '2', '3') === '1b23ef');

//tas 4: check result
function checkResult(original, validator) {
    function wrapper(...params) {
      let result = original.call(this, ...params);
  
      while (!validator(result)) {
        result = original.call(this, ...params);
      }
  
      return result;
    }
  
    return wrapper;
  }

const numberPrompt = checkResult(prompt, x => !isNaN(+x));
let number = +numberPrompt("Введіть число", "0");

const gamePrompt = checkResult(prompt, x => ['камінь', 'ножиці', 'папір'].includes(x.toLowerCase()));
const turn = gamePrompt("Введіть щось зі списку: 'камінь', 'ножиці', 'папір'");

const RandomHigh = checkResult(() => Math.random(), x => x >= 0.5 && x <= 1);
console.log(RandomHigh()); 

const AlwaysSayYes = checkResult(() => confirm("Погоджуєтесь?"), x => x === true);
AlwaysSayYes.call(window); //confirm до погодження

const respectMe = checkResult(() => prompt("Введіть дані"), x => x !== '');
respectMe.call(window); 