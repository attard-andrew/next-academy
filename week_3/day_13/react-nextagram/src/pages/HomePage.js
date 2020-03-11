import React, {useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import LoadingIndicator from '../components/LoadingIndicator';
import UserImages from './UserImages'

const HomePage = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading ] = useState(true)
  useEffect(() => {
    // performing a GET request
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then(result => {
      // If successful, we do stuffs with 'result'
      setUsers(result.data)
      setIsLoading(false)
      console.log(result.data)
    })
    .catch(error => {
      // If unsuccessful, we notify users what went wrong
      console.log('ERROR: ', error)
    })
  }, [])

  return (
    isLoading ? <LoadingIndicator />
    : <ul>
        {users.map(user => (
          <>
            <li>
              {user.username}
            </li>
            <div>
              <img src={user.profileImage} className="profile-avatar"/>
            </div>
			<UserImages userId={user.id}/>
          </>
        ))}
      </ul>
  );
};

export default HomePage