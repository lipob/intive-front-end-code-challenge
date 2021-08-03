import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/actions';
import UsersContainer from '../UsersContainer/UsersContainer'
import './Home.css';

const Home = () => {
  const dispatch = useDispatch()
  const currentUsers = useSelector(state => state.users)

  useEffect(() => {
    if(!currentUsers.length) {
      dispatch(getUsers());
    }
  }, [])
  

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