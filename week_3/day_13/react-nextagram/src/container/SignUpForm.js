import React from 'react';

class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			username: '',
			email: '',
			password: '',
			confirmPassword: ''
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
				<label>Email:
					<input
						name="email"
						type="text"
						onChange={this.handleInputChange} />
				</label>
				<label>Password:
					<input
						name="password"
						type="text"
						onChange={this.handleInputChange} />
				</label>
				<label>Confirm Password:
					<input
						name="confirmPassword"
						type="text"
						onChange={this.handleInputChange} />
				</label>
			</form>
		);
	}
	}

export default SignUpForm