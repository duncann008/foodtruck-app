import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);



  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <div>THIS IS WHERE LOCATION GOES</div>
      <ul>
        <li>Place Order</li>
        <li>View Menu</li>
        <li>View Schedule</li>
      </ul>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
