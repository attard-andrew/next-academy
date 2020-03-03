let container = document.getElementById('container')

$.ajax({
	url: 'https://api.airtable.com/v0/appiJXqDKhYPSmPwU/Table%201',
	method: 'GET',
	headers: {
	  Authorization: 'Bearer keyeBFU8fQi7gddvE'
	},
	success: function(result) {
		let products = result.records
		console.log(products)
		products.forEach(createNewListing);
	}
  })

  let createNewListing = (item) => {
	let newCard = document.createElement('div');
	newCard.className = ('card');

	let cardImage = document.createElement('img');
	cardImage.src = item.fields.Image[0].url;

	let cardBody = document.createElement('div');
	cardBody.className = ('card-body');

	let title = document.createElement('h3');
	title.innerText = item.fields.Name;

	let description = document.createElement('p');
	description.innerText = item.fields.Description;

	cardBody.appendChild(title)
	cardBody.appendChild(description)
	newCard.appendChild(cardImage)
	newCard.appendChild(cardBody)
	container.appendChild(newCard)
}
