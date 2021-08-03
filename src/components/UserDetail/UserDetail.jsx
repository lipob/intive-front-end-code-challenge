import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './UserDetail.css';

const UserDetail = (props) => {
  const [user, setUser] = useState({
    fullName: '',
    picture: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postCode: '',
    timeZone: '',
    email: '',
    phone: '',
    cell: ''
  })
  const userName = props.match.params.username;
  const users = useSelector(state => state.users.length && state.users);
  useEffect(() => {
    if (users.length) {
      const currentUser = users.filter(user => user.login.username === userName);
      setUser({
        fullName: `${currentUser[0].name.first} ${currentUser[0].name.last}`,
        picture: currentUser[0].picture.large,
        address: `${currentUser[0].location.street.name} ${currentUser[0].location.street.number}`,
        city: currentUser[0].location.city,
        state: currentUser[0].location.state,
        country: currentUser[0].location.country,
        postCode: currentUser[0].location.postcode,
        timeZone: `${currentUser[0].location.timezone.offset} ${currentUser[0].location.timezone.description}`,
        email: currentUser[0].email,
        phone: currentUser[0].phone,
        cell: currentUser[0].cell
      });
    }
  }, [])

  return (
    <div className="userDetailWrapper">
      <div className="userDetailImage">
        <img src={user.picture} alt={user.fullName} />
      </div>
    </div>
  );
}

export default UserDetail;