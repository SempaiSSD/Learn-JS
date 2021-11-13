// Задача № 1 Напишите функцию get_min(arr), которая находит минимальное значение в заданном массиве.

let array = [-7, -3, 0, 3, 7];
let arr = [];
function get_min(arr) {
	arr = Math.min(...array);
	console.log(arr);
	return arr;
}
get_min(arr);



// Задача № 2 Создайте массив с четными числами в диапазоне от 500 до 888 включительно.
//Вариант 1
let arr = [];
for (let i = 500; i <= 888; i++) {
	if (i % 2 == 0) {
		arr.push(i);
	}
}
console.log(arr);

//Вариант 2 Функция
function arrLenght() {
	let arr = [];
	for (let i = 500; i <= 888; i++) {
		if (i % 2 == 0) {
			arr.push(i);
		}
	}
	return arr;
}
console.log(arrLenght())




//Задание 3 (Развернуть слово)

//Вариант 1 Топ варик)))))Самый лучший)
let arr = prompt('Введите слово', '')
arr = arr.split('');
arr = arr.reverse('');
arr = arr.join('');
alert(arr);

//Вариант 2 Функция
let word = prompt('Введите слово', '');
function reverse(reverse) {
	if (isNaN(word)) {
		return reverse.split('').reverse().join('');
	} else { console.error('Введите корректное число') }
}
alert(reverse(word));

//Вариант 3 Самый простой
let word = prompt('Введите слово', '');
word = word.split('').reverse().join('');
alert(word);

