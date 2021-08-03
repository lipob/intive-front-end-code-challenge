import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css';

const UserCard = ({ thumb, name, location, userName }) => {
  return (
    <div className="userCard">
      <div className="userCardThumbnail">
        <img src={thumb} alt={`${name.first} ${name.last}`} />
      </div>
      <div className="userCardBody">
        <h3>{`${name.first} ${name.last}`}</h3>
        <p>
          {location.city} <br />
          {location.country}
        </p>
        <Link to={`/user/${userName}`} className="cardButton">
          <span>Show details</span>
        </Link>
      </div>
    </div>
  );
}

export default UserCard;