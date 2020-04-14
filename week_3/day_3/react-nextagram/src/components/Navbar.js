import React from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

const Navbar = (props) => {
	const {userId} = props
	const {userName} = props
	return (
		<>
		<Link to="/">Home</Link>
		<LoginModal></LoginModal>
		</>
	);

};

export default Navbar