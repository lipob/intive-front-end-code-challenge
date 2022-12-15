import React from 'react'
import { Heart } from 'react-feather'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { setIsLoggedIn } from '../../store/actions/session'
import './Footer.css'

const Footer = () => {
  const year = new Date()
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(state => state.isLoggedIn)

  const handleLogout = () => {
    dispatch(setIsLoggedIn(false))
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
