import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './UserPage.css';
import { TextField } from '@material-ui/core';
import { InputAdornment } from '@mui/material';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useHistory } from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const orderListReducer = useSelector(store => store.orderListReducer);
  const aboutContactReducer = useSelector(store => store.aboutContactReducer);
  const Swal = require('sweetalert2');
  const history = useHistory();


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
    
      Swal.fire({
        title: `Save Changes?`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Save',
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
            type: 'EDIT_ABOUT_CONTACT',
            payload: aboutContactReducer
          })
        } else if (result.isDenied) {
          return;
        }
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

  const startOrder = (event) =>  {
    event.preventDefault();
    history.push('/menu');
    }

if (user.role === 'admin')  {
  return (
    <div className="container">
      <div className="logout">
        <LogOutButton />
      </div>
      <header><img src="https://i.imgur.com/aELXlJL.png"/></header>
      <h2>Welcome, {user.username}!</h2><br />
      
      <form onSubmit={(event) => updateLocationSchedule(event)}>
        <TextField 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EditLocationIcon />
              </InputAdornment>
            )
          }}
          type="text" 
          id="current_location" 
          onChange={handleCurrentLocationChange} 
          variant="outlined"
          label="Current Location"
          value={aboutContactReducer.current_location || ''}/><br /><br />
        <TextField 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AssistantDirectionIcon />
              </InputAdornment>
            )
          }}
          type="text" 
          id="next_location" 
          onChange={handleNextLocationChange} 
          variant="outlined" 
          label="Next Location"
          value={aboutContactReducer.next_location || ''}/><br /><br />
        <TextField 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccessTimeIcon />
              </InputAdornment>
            )
          }}
          type="text" 
          id="schedule"
          onChange={handleScheduleChange} 
          variant="outlined"
          label="Schedule"
          value={aboutContactReducer.schedule || ''}/><br /><br />
        <button type="submit">Save</button>
      </form>
      
      <br />
      <h2>Orders to Fill:</h2>
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
      <header><img src="https://i.imgur.com/aELXlJL.png"/></header>
      <h2>Welcome, {user.username}!</h2>
      
      <div>
        <p><LocationOnIcon /> {aboutContactReducer.current_location}</p>
        <p>Until: {aboutContactReducer.schedule}</p>
        <br />
        {/* <p>Next Location: {aboutContactReducer.next_location}</p> */}
      </div> 
      {/* <LogOutButton className="btn" /> */}
      <Button 
        variant="contained"
        endIcon={<ArrowForwardIosIcon />}
        onClick={(event) => startOrder(event)}>Start Ordering!
      </Button>
      
    </div>
    )}
}

// this allows us to use <App /> in index.js
export default UserPage;
