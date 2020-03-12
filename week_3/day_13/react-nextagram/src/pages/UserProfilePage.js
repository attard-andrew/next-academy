import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import LoadingIndicator from '../components/LoadingIndicator';
import { useParams } from 'react-router-dom';

const UserProfilePage = () => {
		const [images, setImages] = useState([])
		const [isLoading, setIsLoading] = useState(true)
		const {id} = useParams();
		const {userName} = useParams();
		useEffect(() => {
			axios.get(`https://insta.nextacademy.com/api/v2/images?userId=${id}`)
			.then(result => {
				setImages(result.data)
				setIsLoading(false)
				console.log(result.data)
			})
			.catch(error => {
				console.log('ERROR: ', error)
			})
		}, [])
		return (
			// Create a div that will house the images and apply some basic styling
			// Note that justifyContent and flexWrap are not justify-content and
			// flex-wrap as JSX does not allow - in variable names (I think)
			<>
			<h1>User Profile Page</h1>
			<h2>{userName}</h2>
			<div style={
				{
					display: "flex",
					justifyContent: "space-around",
					flexWrap: "wrap"
				}
			}>
				{
					// Then, within this div, showing the loading indicator until the request is complete
					// Once complete, loop over & display each image, using the map() method
					isLoading ? <LoadingIndicator />
					: images.map((img) => {
						return <img src={img.url} width={200} height={200}/>
					})
				}
			</div>
			</>
		);
}

export default UserProfilePage