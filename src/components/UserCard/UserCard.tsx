import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { User } from '../../types'
import './UserCard.css'

interface UserCardProps {
  user: User
}

const UserCard: FC<UserCardProps> = props => {
  const { user } = props

  return (
    <div className="userCard">
      <div className="userCardThumbnail">
        <Link to={`/user/${user.username}`}>
          <img src={user.thumb} alt={user.fullName} />
        </Link>
      </div>
      <div className="userCardBody">
        <Link to={`/user/${user.username}`}>
          <h3>{user.fullName}</h3>
          <p>
            {user.city} <br />
            {user.country}
          </p>
        </Link>
      </div>
      <Link to={`/user/${user.username}`} className="cardButton">
        <span>Show details</span>
      </Link>
    </div>
  )
}

export default UserCard
