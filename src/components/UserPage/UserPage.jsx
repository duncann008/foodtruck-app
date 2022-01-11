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
  const aboutContactReducer = useSelector(store => store.aboutContactReducer);
  const Swal = require('sweetalert2')

  useEffect(() => {
    dispatch({
      type: 'FETCH_ORDERS'
    }),
    dispatch({
      type: 'FETCH_ABOUT_CONTACT'
    })
  }, [])

  let timeArray = [];


  const handleCurrentLocationChange = (event) => {
    dispatch({
      type: 'EDIT_CURRENT_LOCATION',
      payload: event.target.value
    })
  }

  const handleNextLocationChange = (event) => {
    dispatch({
      type: 'EDIT_NEXT_LOCATION',
      payload: event.target.value
    })
  }

  const handleScheduleChange = (event) => {
    dispatch({
      type: 'EDIT_SCHEDULE',
      payload: event.target.value
    })
  }

  const updateLocationSchedule = (event) =>  {
    event.preventDefault();
    dispatch({
      type: 'EDIT_ABOUT_CONTACT',
      payload: aboutContactReducer
    })
  }

  

  const fulfillOrder = (param) =>  {
    Swal.fire({
      title: `Complete Order #${param}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Complete',
      denyButtonText: 'Cancel',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: 'FULFILL_ORDER',
          payload: param
        })
      } else if (result.isDenied) {
        return;
      }
    })
    
}

  const startOrder = () =>  {
    history.push('/menu')
    }

if (user.role === 'admin')  {
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      
      <form onSubmit={(event) => updateLocationSchedule(event)}>
        <label htmlfor="current_location">Current Location:</label>
        <input type="text" id="current_location" onChange={handleCurrentLocationChange} placeholder="Current Location" value={aboutContactReducer.current_location || ''}/><br />
        <label htmlfor="next_location">Next Location:</label>
        <input type="text" id="next_location" onChange={handleNextLocationChange} placeholder="Next Location" value={aboutContactReducer.next_location || ''}/><br />
        <label htmlfor="schedule">Current Location Until:</label>
        <input type="text" id="schedule" onChange={handleScheduleChange} placeholder="Time" value={aboutContactReducer.schedule || ''}/><br />
        <button type="submit">Save</button>
      </form>
      {/* <LogOutButton className="btn" /> */}
      <p>Orders to Fill:</p>
      {orderListReducer.map((item, index) =>   {
          if (timeArray.includes(item.order_id)) {
            return <p key={index}>{item.item}  -  {item.quantity}</p>;
          }
          else  {
            timeArray.push(item.order_id)
            return <div>
              <br />
              <p>Order #{item.order_id}  Time: {item.time_of_order}<br /> Notes: {item.notes}</p>
              <button onClick={() => fulfillOrder(item.order_id)}>COMPLETE</button>
              <p key={index}>{item.item}  -  {item.quantity}</p>
            </div>;
          }
                  
        })}
    </div>
  )}
  else {
    return(
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      
      <div>
        <p>Current Location: {aboutContactReducer.current_location}</p>
        <p>Until: {aboutContactReducer.schedule}</p>
        <p>Next Location: {aboutContactReducer.next_location}</p>
      </div> 
      {/* <LogOutButton className="btn" /> */}
      <button>WHAT DO HERE?</button>
      
    </div>
    )}
}

// this allows us to use <App /> in index.js
export default UserPage;
