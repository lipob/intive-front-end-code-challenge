import React from 'react';
import { Link } from 'react-router-dom';
import UserCard from '../UserCard/UserCard';
import './UsersContainer.css';

const UsersContainer = ({ users }) => {
  
  return (
    <div className="usersContainer">
      {users && users.map(user => (
        <Link to={`/user/${user.login.username}`} key={user.login.username}>
          <UserCard 
            thumb={user.picture.medium} 
            name={user.name} 
            location={user.location}
            userName={user.login.username} />
        </Link>
      ))}
    </div>
  );
}

export default UsersContainer;