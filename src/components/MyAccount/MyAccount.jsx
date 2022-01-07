import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is


function MyAccount() {

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const user = useSelector((store) => store.user);
  const contactInfoReducer = useSelector((store) => store.contactInfoReducer);


  useEffect(() => {
    dispatch({
      type: 'FETCH_CONTACT_INFO',
      payload: user.id
    })
  }, [])
 

  const handleFirstNameChange = (event) => {
    dispatch({
      type: 'EDIT_FIRST_NAME',
      payload: event.target.value
    })
  }

  const handleLastNameChange = (event) => {
    dispatch({
      type: 'EDIT_LAST_NAME',
      payload: event.target.value
    })
  }

  const handlePhoneNumberChange = (event) => {
    dispatch({
      type: 'EDIT_PHONE_NUMBER',
      payload: event.target.value
    })
  }

  const handleUserEmailChange = (event) => {
    dispatch({
      type: 'EDIT_USER_EMAIL',
      payload: event.target.value
    })
  }

  const saveButton = (event) => {
    event.preventDefault();
    dispatch({
      type: 'EDIT_CONTACT_INFO',
      payload: {
              id: params.id,
              first_name: contactInfoReducer.first_name,
              last_name: contactInfoReducer.last_name,
              phone_number: contactInfoReducer.phone_number,
              first_name: contactInfoReducer.email,
              user_id: user.id
      }
  })
  }

  return (
    <div className="container">
      <h1>My Account</h1>
      <p>Contact Info</p>
      <form onSubmit={saveButton}>  
        <label htmlfor="first_name">First Name</label>
        <input type="text" id="first_name" onChange={handleFirstNameChange} placeholder="First Name" value={contactInfoReducer.first_name}/><br />
        <label htmlfor="last_name">Last Name</label>
        <input type="text" id="last_name" onChange={handleLastNameChange} placeholder="Last Name" value={contactInfoReducer.last_name}/><br />
        <label htmlfor="phone_number">Phone Number</label>
        <input type="number" id="phone_number" onChange={handlePhoneNumberChange} placeholder="Phone Number" value={contactInfoReducer.phone_number}/><br />
        <label htmlfor="email">Email</label>
        <input type="text" id="email" onChange={handleUserEmailChange} placeholder="Email Address(optional)" value={contactInfoReducer.email}/><br />          
        <button className="saveButton" type="submit">Save</button>
      </form>
    </div>
  );
}

export default MyAccount;
