import React from 'react';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			username: '',
			password: ''
		};
	}

	handleInputChange = (e) => {
		this.setState({value: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Username:
					<input
						name="userName"
						type="text"
						onChange={this.handleInputChange} />
				</label>
				<label>Password:
					<input
						name="Password"
						type="text"
						onChange={this.handleInputChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
	}

export default LoginForm