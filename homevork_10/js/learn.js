// const MS_SECOND = 1000;
// const MS_MINUTES = MS_SECOND * 60;
// const MS_HOUR = MS_MINUTES * 60;
// const MS_DAY = MS_HOUR * 24;
// const MONTH_NAME = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

const HTML = document.documentElement;
const BODY = document.body;


//Вариант 1 - никаких ошибок, статус 200, но ничего на странице не отображает


// async function getResponse() {
// 	let response = await fetch('http://jsonplaceholder.typicode.com/photos')
// 	let content = await response.json()
// 	content = content.splice(0, 10)

// 	let list = document.querySelector('.posts')


// 	for (let key in content) {
// 		list.innetHTML += `
// 		<li class='post'>
// 			<h4>${content[key].title}</h4>
// 			<img src='${content[key].url}' width = '300'>
// 		</li>
// 		`
// 	}
// }
// getResponse();


//Вариант 2 выдает ошибку что не найден юзер в функции...

async function getData() {
	let response = await fetch('https://jsonplaceholder.typicode.com/users')
	let content = await response.json();
	// console.log(content)

	function newObj() {
		for (let i in content) {
			let user = content[i]
			console.log(user)
		} // - до этого момента все работает
		let createBlock = document.createElement('div');
		createBlock = user[0]
		BODY.append(createBlock);
	}
	newObj();
}
getData()
