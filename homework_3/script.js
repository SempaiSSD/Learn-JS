let min = 0;
let max = 100;
trys = 0;
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