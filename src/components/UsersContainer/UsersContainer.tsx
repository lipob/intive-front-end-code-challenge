import React, { FC } from 'react'
import { User } from '../../types'
import UserCard from '../UserCard/UserCard'
import './UsersContainer.css'

interface UsersContainerProps {
  users: User[]
}

const UsersContainer: FC<UsersContainerProps> = props => {
  const { users } = props

  return (
    <div className="usersContainer">{users && users.map(user => <UserCard key={user.username} user={user} />)}</div>
  )
}

export default UsersContainer
