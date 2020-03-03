$.ajax({
	url: "https://api.tronalddump.io/random/quote",
	method: "GET",
	success: function(result) {
		console.group(result.value);
	},
	error: function(error) {
		console.log(`Error: ${error}`);
	}
})

let header = document.getElementById('joke')
header.textContent = result.value