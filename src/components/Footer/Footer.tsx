import React from 'react'
import { Heart } from 'react-feather'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { setUserLoggedOut } from '../../store/actions/session'
import './Footer.css'

const Footer = () => {
  const year = new Date()
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(state => state.session.isLoggedIn)

  const handleLogout = () => {
    dispatch(setUserLoggedOut())
  }

  return (
    <div className="footerWrapper">
      <span>
        © {year.getFullYear()} Made with <Heart size={16} /> by{' '}
        <a href="https://github.com/lipob" target="_blank" rel="noreferrer">
          Leopoldo Blanco
        </a>
      </span>
      {isLoggedIn && <button onClick={handleLogout}>Log out</button>}
    </div>
  )
}

export default Footer
