// const MS_SECOND = 1000;
// const MS_MINUTES = MS_SECOND * 60;
// const MS_HOUR = MS_MINUTES * 60;
// const MS_DAY = MS_HOUR * 24;
// const MONTH_NAME = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

const HTML = document.documentElement;
const BODY = document.body;

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



// $(document).ready(function () {
// 	async function getData() {
// 		let response = await fetch('https://jsonplaceholder.typicode.com/users')
// 		let content = await response.json();
// 		// console.log(content)

// 		function newObj() {
// 			for (let i in content) {
// 				let user = content[i]
// 				console.log(user)
// 			} // - до этого момента все работает
// 			let createBlock = document.createElement('div');
// 			createBlock = user[0]
// 			BODY.append(createBlock);
// 		}
// 		newObj();
// 	}
// 	getData()
// })

$(document).ready(function () {
	async function getResponse() {
		let responce = await fetch('https://jsonplaceholder.typicode.com/users')
		let users = await responce.json()
		users = users.splice(0, 10)


		let list = document.querySelector('.users')

		let key;

		for (key in users) {

			list.innerHTML += `            
            <li class = "user">
                <img src="https://download-cs.net/steam/avatars/3412.jpg" alt="avatar">
                <div class="inf">${users[key].name}</div>
                <div class="inf">${users[key].email}</div>
                <div class="inf">${users[key].phone}</div>
                <div class="inf">${users[key].website}</div>
                <div class="buttons">
                    <button type="button" class="button1" value=>Alert</button>
                    <button type="button" class="button2">Delete</button>
                </div>    
            </li>`
			console.log(users[key])
		};
		console.log(users);
		$('.button1').on({
			click: function () {
				alert(users[0].name);
			}
		})
		$('.button2').on({
			click: function () {
				$(this).parent().parent().remove();
			}
		})
	}
	getResponse();
});