import React, { useState } from 'react';
import LoginForm from '../container/LoginForm';
import SignUpForm from '../container/SignUpForm';

const LoginModal = () => {
	const [modalOpen, changeModalState] = useState(false) // Will be used to show/hide the modal, defaults to hidden (false)
	const [isLogin, changeForm] = useState(false) // Will be used to show either Login or Sign Up form, defaults to Sign Up

	const modalStyle = {
		display: modalOpen ? "block" : "none", // If modalOpen = true, then show the modal, otherwise hide it with 'display: none'
		height: '100vh',
		width: '100vw',
		backgroundColor: 'rgba(0,0,0,.5)',
		position: 'fixed',
		top: 0,
		left: 0,
		color: 'white'
	}

	const toggleModal = () => {
		changeModalState(!modalOpen) // Flip the modal between shown/hidden
	}
	
	const toLogin = () => {
		changeForm(true) // Flip the modal to display the login form
	}

	const toSignup = () => {
		changeForm(false) // Flip the modal to display the signup form
	}

	const closeModal = () => {
		changeModalState(false) // Turns off the Modal
	}
	return (
		<div>
			<button onClick={toggleModal}>Sign Up/Login</button> {/* Display a Sign Up/Login button */}
			<div style={modalStyle}> {/* Set the modal, which is hidden by default */}
				{
					isLogin ? //  If isLogin is true, then show the Login form
					<div style={{width: '50%', margin: 'auto', color: 'black', backgroundColor: 'white'}}>
					<button onClick={closeModal}>X</button>
					<h1>Login Form</h1>
					<LoginForm></LoginForm>
					<button onClick={toSignup}>Sign Up</button>
					</div>
					: // If isLogin is false, the shown the Sign Up form
					<div style={{width: '50%', margin: 'auto', color: 'black', 'backgroundColor': 'white'}}>
					<button onClick={closeModal}>X</button>
					<h1>SignUp</h1>
					<SignUpForm></SignUpForm>
					<button onClick={toLogin}>Go Login</button>
					</div>
				}
			</div>
		</div>
	);
};

export default LoginModal