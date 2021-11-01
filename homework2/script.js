//Задача 1
const METERS_IN_KILOMETR = 1000;
const METERS_IN_INCH = 0.0254;
const PI = 3.14;

let N = prompt('Введите киллометраж');
let D = prompt('Введите диаметр колеса');

let result = (N * METERS_IN_KILOMETR) * ((D * METERS_IN_INCH) * PI)
let result_for = result * 4;

alert(result);
alert(result_for);





//Задача 2
word = prompt('Введите число');
const one_day = 'День';
const two_day = 'Дня';
const over_day = 'Дней';
const n = word % 10;
if (word === 1) {
	console.log(`${word} ${one_day}`)
}
if (word >= 2 && word <= 4) {
	console.log(`${word} ${two_day}`);
}
else if (word >= 5 && word <= 20) {
	console.log(`${word} ${over_day}`);
}

