import React from 'react';
import UserCard from '../UserCard/UserCard';
import './UsersContainer.css';

const UsersContainer = ({ users }) => {
  
  return (
    <div className="usersContainer">
      {users && users.map(user => (
        <UserCard 
          key={user.login.username}
          thumb={user.picture.medium} 
          name={user.name} 
          location={user.location}
          userName={user.login.username} />
      ))}
    </div>
  );
}

export default UsersContainer;