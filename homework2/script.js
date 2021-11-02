//Задача 1
const METERS_IN_KILOMETR = 1000;
const METERS_IN_INCH = 0.0254;
const PI = 3.14;

let N = prompt('Введите киллометраж');
let D = prompt('Введите диаметр колеса');

let result = (N * METERS_IN_KILOMETR) / (D * METERS_IN_INCH) * PI
let result_for = result * 4;

alert(result);
alert(result_for);





//Задача 2 (Склонение слово "День")
let days = +(prompt('Введите день', '0'));
let result = '';
let mod10 = days % 10;
let mod100 = days % 100;

if (mod100 > 10 && mod100 < 20) {
	result = 'Дней'
} else if (mod10 === 1) {
	result = 'День'
} else if (mod10 > 1 && mod10 < 5) {
	result = 'Дня';
} else {
	result = 'Дней';
}
alert(`${days} ${result}`);

//Задача 2 SWITCH
let days = +(prompt('Введите день'));

let mod100 = days % 100;
let mod10 = days % 10;
let result = '';
if (mod100 > 10 && mod100 < 20) {
	result = 'Дней'
} else {
	switch (mod10) {
		case 1: result = 'День'; break;
		case 2:
		case 3:
		case 4:
			result = 'Дня';
			break;
		default: result = 'Дней';
	}
}
alert(`${days} ${result}`);
