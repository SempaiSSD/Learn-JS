//Задача 1
const MKM = 1000;
const Inch = 0.0254;
const PI = 3.14;

let N = +(prompt('Сколько проехала киллометров машина?', '0'));
let D = +(prompt('Какой диаметр колеса?', '0'));
let result = (N * MKM) / ((D * Inch) * PI)
let resFor = result * 4;
if (isNaN(N) || isNaN(D)) {
	console.error('Введите числовое значение')
}
alert(`${result} ${resFor}`);







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
