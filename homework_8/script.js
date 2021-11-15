//Написать код, который будет выполнять 4 действия на странице index.html:
// 1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
// 2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
// 3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
// 4. Удалить все квадраты, и сделать фон страницы черным.
// Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие также должно иметь задержку 3 секунды.
const HTML = document.documentElement;
const BODY = document.body;

// function toBlueElement() {
// 	for (let i = 0; i <= 10; i++) {
// 		let div = document.createElement('div');
// 		div.className = 'blueFivty';
// 		BODY.prepend(div);
// 	}

// }
// function toGreen() {
// 	let div1 = document.querySelectorAll('.blueFivty');
// 	for (let i = 0; i < div1.length; i++) {
// 		div1[i].classList.add('green');
// 	}
// }

// function toRedYellow() {
// 	let div1 = document.querySelectorAll('.green');
// 	for (let i = 0; i < div1.length; i++) {
// 		if ((i + 1) % 3 === 0) {
// 			div1[i].classList.add('red');
// 		} else {
// 			div1[i].classList.add('yellow');
// 			div1[i].classList.add('remove')
// 		}
// 	}
// }

// function toRemove() {
// 	// let div1 = document.querySelectorAll('.remove');
// 	// for (let i = 0; i < div1.lenght; i++) {
// 	//     div1[i].remove();
// 	// }
// 	BODY.remove();
// 	HTML.style.background = 'black';

// }

// setTimeout(toBlueElement, 1000);
// setTimeout(toGreen, 2000);
// setTimeout(toRedYellow, 3000);
// setTimeout(toRemove, 4000);



// Написать код, который будет выполнять 5 действия на странице index.html:
// 1. Создать 1000 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их горизонтально.
// 2. Изменить цвет каждого квадрата на фиолетовый, и увеличить размер до 10 на 10 пикселей.
// 3. Вывести на каждом квадрате его порядковый номер.
// 4. Изменить размер каждого 3 - го квадрата на 30 * 30, каждого 17 сделать треугольников, остальных сделать желтыми.
// 5. Удалить все треугольники, и сделать фон всех квадратов черным, кроме любых 5.
// Каждое действие должно выполниться через 2 секунды от предыдущего, первое действие также должно иметь задержку 2 секунды.


function toBlueElement() {
	for (let i = 0; i <= 1000; i++) {
		let div = document.createElement('div');
		div.className = 'blueFivty';
		BODY.prepend(div);
	}

}
function toGreen() {
	let div1 = document.querySelectorAll('.blueFivty');
	for (let i = 0; i < div1.length; i++) {
		div1[i].classList.add('green');
	}
}

function toText() {
	let div1 = document.querySelectorAll('.green')
	for (let i in div1) {
		div1[i].innerHTML = [i];
		console.log([i])
	}
}
function toRedYellow() {
	let div1 = document.querySelectorAll('.green');
	for (let i = 0; i < div1.length; i++) {
		if ((i + 1) % 3 === 0) {
			div1[i].classList.add('red');
		} else if ((i + 1) % 17 === 0) {
			div1[i].classList.add('triangle')
		} else {
			div1[i].classList.add('yellow');
		}
	}
}

function toRemove() {
	let div1 = document.querySelectorAll('.triangle');
	for (let i = 0; i < div1.length; i++) {
		div1[i].remove();
	}
	div1 = document.querySelectorAll('.green')
	for (let i = 0; i < div1.length; i++) {
		div1[i].classList.add('black');
	}
}

setTimeout(toBlueElement, 2000);
setTimeout(toGreen, 4000);
setTimeout(toText, 6000);
setTimeout(toRedYellow, 8000);
setTimeout(toRemove, 10000);