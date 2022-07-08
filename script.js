'use strict';

let select = document.querySelector('#cars'),
	 output = document.querySelector('.output');

select.addEventListener('change', () => {
	const request = new XMLHttpRequest();

	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const data = JSON.parse(request.responseText);
			data.cars.forEach(i => {
				if(i.brand === select.value) {
					output.innerHTML = 'Model: ' + i.model + '<br>Price: ' + i.price;
				}
			});
		}
	});
	
	request.open('GET', './cars.json');
	request.setRequestHeader('Content-type', 'application/json');
	request.send();
})
