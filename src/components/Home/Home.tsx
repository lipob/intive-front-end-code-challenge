import React, { useState, useEffect } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getUsers } from '../../store/actions/actions'
import { AppState } from '../../store/reducers/rootReducer'
import UsersContainer from '../UsersContainer/UsersContainer'
import './Home.css'

const Home = () => {
  const [page, setPage] = useState<number>(1)
  const [users, setUsers] = useState<number>(0)
  const currentUsers = useAppSelector(state => state.users)
  const lastPage = useAppSelector(state => state.page)
  const loading = useAppSelector(state => state.loading)
  const dispatch = useAppDispatch()
  const resultsLimitPerPage = 10

  // Fetch users on page load
  useEffect(() => {
    if (!currentUsers.length) {
      dispatch(getUsers(page, resultsLimitPerPage))
    }
  }, [dispatch, page, currentUsers])

  // Fetch users when user scrolls
  useEffect(() => {
    if (page !== 1 && page <= 5 && users <= 40) {
      dispatch(getUsers(page, resultsLimitPerPage))
    }
  }, [dispatch, page, users])

  // Update results page number for infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (page < 4) {
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
          setPage(lastPage)
          setUsers(currentUsers.length)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div>
      <div className="homeHeader">
        <h1>Code challenge!</h1>
        <p className="homeLeading">Create a simple page using the Random User API.</p>
      </div>
      <div className="homeMain">
        <UsersContainer users={currentUsers && currentUsers} />
      </div>
      {loading ? <span className="loaderWrapper">Loading...</span> : null}
    </div>
  )
}

export default Home
