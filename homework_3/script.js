//Задание 1 (На отрезке чисел, посчитать числа кратные 6 и их сумму)
let n1 = +(prompt('Введите число 1'));
let n2 = +(prompt('Введите число 2'));

let result1 = 0; //kolvo % 6
let result2 = 0;// summa
for (let i = n1; i < n2; i++) {
	if (i % 6 === 0) {
		console.log(i);
		result1++;
		result2 = result2 + i;
	}
}
alert(`Ответ: ${result1}, ${result2}`);

//Задание 2 (Мини-игра "Угадай число")
let min = 0;
let max = 100;
let trys = 0;
const MAX_TRYS = 15;
do {
	num = min + (max - min) / 2;
	let answer = confirm('Ваше число больше числа' + ' ' + num + '?');
	trys++;
	if (answer) {
		min = num;
	} else {
		max = num;
	}
	console.log(max, min);
} while (min - max > 1 || trys < MAX_TRYS);
alert('Результат', + ~~(max));
