import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const handleUsername = (e) => {
		setUserName(e.target.value);
	}

	const handleEmail = (e) => {
		setEmail(e.target.value);
	}

	const handlePassword = (e) => {
		setPassword(e.target.value);
	}

	const handleConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method: 'POST',
			url: 'https://insta.nextacademy.com/api/v1/users/',
			headers: {
				"Content-Type":"application/json"
			},
			data: {
			  username: userName,
			  email: email,
			  password: password
			}
		  })
		  .then(response => {
			console.log(response)
		  })
		  .catch(error => {
			console.log(error.response) // so that we know what went wrong if the request failed
		  })
	}

		return (
			<form onSubmit={handleSubmit}>
				<label>Username:
					<input
						name="userName"
						type="text"
						onChange={handleUsername}
						value={userName} />
				</label>
				<label>Email:
					<input
						name="email"
						type="text"
						onChange={handleEmail} 
						value={email} />
				</label>
				<label>Password:
					<input
						name="password"
						type="text"
						onChange={handlePassword}
						value={password} />
				</label>
				<label>Confirm Password:
					<input
						name="confirmPassword"
						type="text"
						onChange={handleConfirmPassword}
						value={confirmPassword} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}

export default SignUpForm