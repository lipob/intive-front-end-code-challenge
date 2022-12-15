import React, { useState, useEffect } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getUsers } from '../../store/actions/users'
import UsersContainer from '../../components/UsersContainer/UsersContainer'
import './styles.css'

const Home = () => {
  const [page, setPage] = useState<number>(1)
  const dispatch = useAppDispatch()
  const currentUsers = useAppSelector(state => state.users.users)
  const lastPage = useAppSelector(state => state.users.page)
  const loading = useAppSelector(state => state.users.loading)
  const resultsLimitPerPage = 10

  useEffect(() => {
    dispatch(getUsers(page, resultsLimitPerPage))
  }, [dispatch, page])

  // Update results page number for infinite scroll, limited to 10 pages
  useEffect(() => {
    const handleScroll = () => {
      if (page < 10) {
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
          setPage(lastPage)
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
