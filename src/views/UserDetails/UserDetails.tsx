import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MapPin, Phone, Smartphone, Mail } from 'react-feather'
import { User } from '../../types'
import { useAppSelector } from '../../hooks/useAppSelector'
import './styles.css'

const UserDetails = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const { username } = useParams()
  const users = useAppSelector(state => state.users.users)

  useEffect(() => {
    if (users?.length) {
      const userFitered = users.filter(user => user.username === username)
      setCurrentUser(userFitered[0] || null)
    }
  }, [users, username])

  return (
    <div className="userDetailWrapper">
      <h1>Code challenge! User details</h1>
      {currentUser && (
        <div className="userDetail">
          <div className="userDetailImage">
            <img src={currentUser.picture} alt={currentUser.fullName} />
          </div>
          <div className="userDetailBody">
            <h2>{currentUser.fullName}</h2>
            <div className="userContact">
              <h3>Contact</h3>
              <span>
                <Mail size={14} /> {currentUser.email}
              </span>
              <span>
                <Phone size={14} /> {currentUser.phone}
              </span>
              <span>
                <Smartphone size={14} /> {currentUser.cell}
              </span>
            </div>
            <div className="userLocation">
              <h3>Location</h3>
              <span>
                <MapPin size={14} /> {currentUser.address}
              </span>
              <span>
                {currentUser.city} ({currentUser.postCode})
              </span>
              <span>
                {currentUser.state} - {currentUser.country}
              </span>
              <span>GMT {currentUser.timeZone}</span>
            </div>
          </div>
        </div>
      )}

      <Link to="/" className="goHomeButton">
        <span>Go Homepage</span>
      </Link>
    </div>
  )
}

export default UserDetails
