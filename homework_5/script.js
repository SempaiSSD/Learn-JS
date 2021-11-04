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
function get_max(arr) {
	let max_num = arr[0];

	for (let i in arr) {
		if (arr[i] > max_num) max_num = arr[i];
	}
	return max_num;
}

function call_get_max() {
	let array = [10, 20, -30, -22, -5, 40, 24, 30];
	alert(get_max(array));
}
