const MS_SECOND = 1000;
const MS_MINUTES = MS_SECOND * 60;
const MS_HOUR = MS_MINUTES * 60;
const MS_DAY = MS_HOUR * 24;
const MONTH_NAME = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

//Задача 3 Напишите функцию get_day(date), которая возвращает день недели от задан-ной даты.
function get_day(day) {
	return new Date(day).toLocaleString('ru-Ru', { weekday: 'long' });
}
console.log(get_day('1997/07/08'));




//Задача 2. От заданной даты посчитать кол.во дней до Нового года;
let a = new Date(2022, 00, 01);
let b = new Date(2021, 09, 08);


//Вариант 1
// let result = a - b;
// result /= MS_DAY;
// alert(result);     //Работает


//Вариант 2
let days = Math.floor((a.getTime() - b.getTime()) / MS_DAY);
alert(days)     //Работает


//Вариант 3
// function get_count_days(date) {
// 	let result;
// 	result = a - date;
// 	result = result / MS_DAY;
// 	return result;
// }
// alert(get_count_days(2021, 10, 08)); //Эта функция выводит какую то ересь, и я не понимаю почему.