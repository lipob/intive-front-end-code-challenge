import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/actions';
import UsersContainer from '../UsersContainer/UsersContainer'
import './Home.css';

const Home = () => {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const currentUsers = useSelector(state => state.users)

  useEffect(() => {
    if(!currentUsers.length) {
      dispatch(getUsers(page, 10));
    }
  }, [])

  useEffect(() => {
    if (page < 5 && currentUsers.length < 50) {
      dispatch(getUsers(page, 10));
    }
  }, [page])

  window.onscroll = (event) => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      setPage(page => page + 1)
    }
  }
  
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
    </div>
  );
}

export default Home;