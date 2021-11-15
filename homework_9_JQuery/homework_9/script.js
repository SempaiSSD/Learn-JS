// Написать код, который будет выполнять 5 действия на странице index.html:
// 1. Создать 1000 квадратов голубого цвета размером 70 * 70 пикселей, и распологает их горизонтально.
// 2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100 * 100 пикселей.
// 3. Вывести на каждом квадрате его порядковый номер.
// 4. Изменить цвет каждого 3 - го квадрата на красный, каждый 15 квадрат сделать треугольником цветом хаки.
// 5. Удалить все красные квадраты.
// Каждое действие должно выполниться через 2 секунды от предыдущего, первое действие также должно иметь задержку 2 секунды.
$(document).ready(function () {

	function createToBlue() {
		for (i = 0; i <= 1000; i++) {
			$('body').prepend('<div></div>');
			$('body div').addClass('toBlue')
		}
	}
	function transformToViolet() {
		$('.toBlue').addClass("toViolet");
		$('.toViolet').removeClass('toBlue')
	}
	function innerText() {
		let divs = $('.toViolet');
		for (let i in divs) {
			divs[i].innerHTML = i;
		}
	}
	function toTringleAndRed() {
		let divs = document.querySelectorAll('.toViolet');
		for (let i = 0; i < divs.length; i++) {
			if ((i + 1) % 3 === 0) {
				divs[i].classList.add('toRed');
				divs[i].classList.remove('toViolet')
			}
			if ((i + 1) % 15 === 0) {
				divs[i].classList.add('triangle')
			}
		}

		// let divs = $('body div:nth-child(3n+1)'); // Жалуется на подключенную с сайта библиотеку и на nth-child... 
		// for (let i = 0; i < divs.lenght; i++) {
		// 	divs.addClass('toRed');
		// 	$('.toRed').removeClass('toViolet')
		// }
	}
	function removeRed() {
		let divs = $('.toRed');
		divs.removeClass('toRed')
		// $('.toRed').removeClass('.toRed') //Не работает...Почему??
	}
	setTimeout(createToBlue, 2000)
	setTimeout(transformToViolet, 4000)
	setTimeout(innerText, 6000)
	setTimeout(toTringleAndRed, 8000)
	setTimeout(removeRed, 10000)
})



// Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
// При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
// При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.

// сделать с помощью jQuery

$(document).ready(function () {
	$('body').prepend('<div></div>');
	$('div').addClass('one').css({ width: '300px', height: '200px', background: 'skyblue' })
	$('.one').mouseenter(function () {
		let cssOut = [];
		let cssProperties = $(this).css(['width', 'height']);
		$.each(cssProperties, function (prop, value) {
			cssOut.push(prop + ': ' + value)
		})
		console.log(cssOut)
	})
	$('.one').click(function () {
		alert('Голубой прямоугольник')
	})


	$('body').append('<div></div>');
	$('body div:last-child').addClass('two').css({ width: '500px', height: '300px', background: 'green' })
	$('.two').mouseenter(function () {
		let cssOut = [];
		let cssProperties = $(this).css(['width', 'height']);
		$.each(cssProperties, function (prop, value) {
			cssOut.push(prop + ': ' + value)
		})
		console.log(cssOut)
	})
	$('.two').click(function () {
		alert('Зеленый прямоугольник)')
	})
})