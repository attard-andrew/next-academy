$.ajax({
	url: "https://api.giphy.com/v1/gifs/random?api_key=yPjVQkbiRcCRx05LmA1q02IiwINnK30S&tag=onesec",
	method: "GET",
	success: function(result) {
		// console.log(result.data.image_url);
		let gif_url = result.data.image_url;

		$.ajax({
			method: 'get',
			url: 'https://next-message-board.herokuapp.com/messages',
			success: function(messages) {
			  $('#board').html('')
			  messages.forEach(msg => {
				$('#board').append(`
				  <div class="card text-center" style="width: 300px;">
					<div class="card-body">
					  <p>${msg.text}</p>
					</div>
					<div class="card-footer text-muted">
					  ${moment(msg.created_at).format('MMMM D, YYYY - h:mmA')}
					</div>
					<button class="btn delete-btn btn-danger">Delete</button>
				  </div>
				`)
			  })
			}, 
			beforeSend: function() {
				let loading_gif = $(document.createElement('img'))
				loading_gif.attr("src", gif_url);
				// console.log(gif)
				$("#board").html(loading_gif)
			}, 
		  })
	},
	error: function(error) {
		console.log(`${error}`);
	},
});





  
  $('form').on('submit', function(e) {
	e.preventDefault()
	$.ajax({
	  method: 'post',
	  url: 'https://next-message-board.herokuapp.com/messages',
	  data: {
		text: $('#text-input').val()
	  },
	  success: function(response) {
		console.log(response.message)
		$('#board').prepend(`
		<div class="card text-center" style="width: 300px;">
			<div class="card-body">
			<p>${response.message.text}</p>
			</div>
			<div class="card-footer text-muted">
			${moment(response.message.created_at).format('MMMM D, YYYY - h:mmA')}
			</div>
			<button class="btn delete-btn btn-danger" id="${response.message.id}">Delete</button>
	  	</div>
		`)
	  },
	  error: function(error) {
		console.log(error)
	  }
	})
  })

  $('#board').on('click', '.delete-btn', function(e) {
	e.preventDefault()
	$.ajax({
	  method: 'post',
	  url: `https://next-message-board.herokuapp.com/messages/delete/${e.target.id}`,
	  success: function(data) {
		console.log(data)
		e.target.parentElement.remove()
	  }
	})
  })