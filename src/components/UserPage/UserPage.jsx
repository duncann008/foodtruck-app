import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const orderListReducer = useSelector(store => store.orderListReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_ORDERS'
    })
  }, [])


  
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <div>Why does this page exist?</div>
      <p>Current Location</p>
      <p>Schedule</p>
      {/* <LogOutButton className="btn" /> */}
      <p>Orders to Fill:</p>
      {orderListReducer.map((item, index) =>    
                  <div>
                    <p>{item.time_of_order}</p>
                    <p key={index}>{item.item}  -  {item.quantity}</p>
                  </div>
                )}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
