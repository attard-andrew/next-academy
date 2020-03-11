import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	const {userId} = props
	const {userName} = props
	return (
		<>
		<Link to="/">Home</Link>
		</>
	);

};

export default Navbar