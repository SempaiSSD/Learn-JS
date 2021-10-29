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

