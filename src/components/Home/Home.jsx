import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, isLoading } from '../../store/actions';
import UsersContainer from '../UsersContainer/UsersContainer'
import './Home.css';

const Home = () => {
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState(0)
  const resultsLimitPerPage = 10;
  const currentUsers = useSelector(state => state.users)
  const lastPage = useSelector(state => state.page)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  // Fetch users on page load
  useEffect(() => {
    if (!currentUsers.length) {
      dispatch(isLoading());
      dispatch(getUsers(page, resultsLimitPerPage));
    }
  }, [dispatch, page, currentUsers])

  // Fetch users when user scrolls
  useEffect(() => {
    if (page !== 1 && page <= 5 && users <= 40) {
      dispatch(isLoading());
      dispatch(getUsers(page, resultsLimitPerPage));
    }
  }, [dispatch, page, users])

  // Update results page number for infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (page < 4) {
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
          setPage(page => page = lastPage)
          setUsers(users => users = currentUsers.length)
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  });
  
  return (
    <div>
      <div className="homeHeader">
        <h1>Code challenge!</h1>
        <p className="homeLeading">
          Create a simple page using the Random User API.
        </p>
      </div>
      <div className="homeMain">
        <UsersContainer users={currentUsers && currentUsers} />
      </div>
      {loading ? <span className="loaderWrapper">Loading...</span> : null}
    </div>
  );
}

export default Home;