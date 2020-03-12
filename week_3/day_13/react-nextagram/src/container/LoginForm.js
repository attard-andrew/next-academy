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

	render() {
		return (
			<form>
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
			</form>
		);
	}
	}

export default LoginForm