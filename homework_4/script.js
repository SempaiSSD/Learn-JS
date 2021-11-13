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


// Задача № 4 ЗАДАНИЕ С ВЫСОКИМ УРОВНЕМ
// Необходимо написать мини-игру «Города». Нужно бесконечно запрашивать у пользователя ввод города. 
// Проверять если последняя буква предыдущего слова совпадает с первой буквой следующего слова – засчитываем +1 очко. 
// Если не совпадает выдаем сообщение «Игра окончена. Ваши очки: {кол-во очков}».

function start_game_city_chain(first_city = "Киев") {
  if (typeof first_city !== "string") {
    return false;
  }

  function add_to_memory(memory_array, city) {
    memory_array.push(city.toLowerCase());
  }

  let cities = [first_city];
  add_to_memory(cities, first_city);
  let points = 0;

  while (true) {
    let new_city = prompt("Введите название города", "");
    console.log(new_city.toLowerCase()),
      cities,
      cities.indexOf(new_city.toLowerCase());
    if (cities.indexOf(new_city) > -1) {
      alert("Такой город уже вводился");
    }

    let prev_city = cities[cities.length - 1];

    let last_char = prev_city[prev_city.length - 1];
    let first_char = new_city[0];

    last_char = last_char.tolowerCase();
    first_char = first_char.tolowerCase();

    if (last_char === first_char) {
      points++;
      add_to_memory(cities, new_city);
    } else {
      alert(`Игра окончена. Ваши очки: ${points}`);
      break;
    }

    console.log(last_char, first_char);
  }
}
start_game_city_chain("Краматорск");
