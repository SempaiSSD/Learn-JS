// Напишите функцию get_order(string), которая отсортирует все слова в заданном предложении string в алфавитном порядке.
// 	Например: get_order("ноты акустика гитара"), функция должна вернуть "акустика гитара ноты"

let arr = ['Фаня', 'Кора', 'Гоша', 'Инокентий'];
function get_order(string) {
	if (typeof arr === 'string') {
		console.log('Введите строку')
	} else {
		return arr.sort().join(' ');
	}
}
console.log(get_order(arr));


// Напишите функцию get_random(arr), которая вернет случайный элемент входящего массива arr.

let array = [32, 'greet', 84];
function get_random() {
	if (Array.isArray === array) {
		console.log('Данные введены некорректно');
	}
	return array[Math.floor(Math.random() * array.length)];
}
console.log(get_random(array));


//Напишите функцию random(min, max), 
//которая будет возвращать случае целое число от min до max
function random(min, max) {
	let result;
	return Math.floor((max - min) * Math.random() + min);
}
function call_random() {
	min = +(prompt('min'));
	max = +(prompt('max'));
	for (let i = 0; i < 5; i++) {
		console.log(random(min, max));
	}
}



//Напишите функцию get_max( arr ), которая находит максимальное значение в заданном массиве.

//Вариант1
let array = [-123, 132, -424, 231, -1314, 113, -1313];
let arr = []
function get_max(arr) {
	return Math.max(...array);
}
console.log(get_max(array));



//Вариант 2
let array = [10, 20, -30, -22, -5, 40, 24, 30];
function get_max(arr) {
	let max_num = arr[0];
	// console.log(max_num)
	for (let i in arr) {
		console.log(i)
		if (arr[i] <= max_num) max_num = arr[i];
	}
	return max_num;
}
alert(get_max(array));




// Есть объект points с оценками.Напишите код, который выведет сумму всех оценок.
let points = {
	"Вася": 200,
	"Петя": 300,
	"Даша": 250,
	"Андрей": 150,
	"Сергей": 450,
};
function sum_points() {
	let sum = 0;
	for (let i of Object.values(points)) {
		sum += i;
	} return sum;
}
console.log(sum_points());
