import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Smartphone, Mail } from 'react-feather';
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

  // Set current user details
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
  }, [users, userName])

  return (
    <div className="userDetailWrapper">
      <h1>Code challenge! User details</h1>
      <div className="userDetail">
        <div className="userDetailImage">
          <img src={user.picture} alt={user.fullName} />
        </div>
        <div className="userDetailBody">
          <h2>{user.fullName}</h2>
          <div className="userContact">
            <h3>Contact</h3>
            <span><Mail size={14} /> {user.email}</span>
            <span><Phone size={14} /> {user.phone}</span>
            <span><Smartphone size={14} /> {user.cell}</span>
          </div>
          <div className="userLocation">
            <h3>Location</h3>
            <span><MapPin size={14} /> {user.address}</span>
            <span>{user.city} ({user.postCode})</span>
            <span>{user.state} - {user.country}</span>
            <span>GMT {user.timeZone}</span>
          </div>
        </div>
      </div>
      <Link to='/' className="goHomeButton">
        <span>Go Homepage</span>
      </Link>
    </div>
  );
}

export default UserDetail;