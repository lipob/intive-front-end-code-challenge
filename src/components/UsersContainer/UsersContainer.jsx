import React from 'react';
import UserCard from './UserCard';

const UsersContainer = ({ users }) => {
  
  return (
    <div>
      {users && users.map(user => (
        <UserCard thumb={user.picture.thumbnail} />
      ))}
    </div>
  );
}

export default UsersContainer;