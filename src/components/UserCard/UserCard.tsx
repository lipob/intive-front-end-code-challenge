import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css';

const UserCard = ({ thumb, name, location, userName }) => {
  return (
    <div className="userCard">
      <div className="userCardThumbnail">
        <Link to={`/user/${userName}`}>
          <img src={thumb} alt={`${name.first} ${name.last}`} />
        </Link>
      </div>
      <div className="userCardBody">
        <Link to={`/user/${userName}`}>
          <h3>{`${name.first} ${name.last}`}</h3>
          <p>
            {location.city} <br />
            {location.country}
          </p>
        </Link>
      </div>
        <Link to={`/user/${userName}`} className="cardButton">
          <span>Show details</span>
        </Link>
    </div>
  );
}

export default UserCard;