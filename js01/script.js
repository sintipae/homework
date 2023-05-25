let creditMath = 6;
let creditBiology = 3;

let scoreMath = prompt("Enter your Math score: ");
let scoreBiology = prompt("Enter your Biology score: ");

let semesterMath = creditMath * scoreMath;
let semesterBiology = creditBiology * scoreBiology;

let semesterResult = (semesterBiology + semesterMath) / (creditBiology + creditMath);
alert(semesterResult);