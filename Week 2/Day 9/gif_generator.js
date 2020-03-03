const generate_gif = document.getElementById('generate-gif')

// This function pulls a random gif
let random_gif = () => {
	$.ajax({
		url: "https://api.giphy.com/v1/gifs/random?api_key=yPjVQkbiRcCRx05LmA1q02IiwINnK30S&tag=notbad",
		method: "GET",
		success: function(result) {
			// console.log(result.data.image_url);
			let gif = result.data.image_url;
			console.log(gif)
			$("#random-gif").attr("src", gif);
		},
		error: function(error) {
			console.log(`${error}`);
		}
	});
}

let random_chuck = () => {
	$.ajax({
		url: "https://api.chucknorris.io/jokes/random",
		method: "GET",
		success: function(result) {
			let joke = result.value;
			console.log(joke)
			document.getElementById('random-chuck').innerHTML = `${joke}`
		},
		error: function(error) {
			console.log(`${error}`);
		}
	});
}

let multi_generate = () => {
	random_gif()
	random_chuck()
}

// Use the random gif function when the button is clicked
generate_gif.addEventListener('click', multi_generate)