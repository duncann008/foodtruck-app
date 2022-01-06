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

  const [contactInfo, setContactInfo] = useState({first_name: '', last_name: '', phone_number: '', email: ''});

  useEffect(() => {
    dispatch({
      type: 'FETCH_CONTACT_INFO',
      payload: user.id
    })
  }, [])
 

  const handleFirstNameAdd = (event) => {
    setContactInfo({
      ...contactInfo,
      first_name: event.target.value,
    });
  }

  const handleLastNameAdd = (event) => {
    setContactInfo({
      ...contactInfo,
      last_name: event.target.value,
    });
  }

  const handlePhoneNumberAdd = (event) => {
    setContactInfo({
      ...contactInfo,
      phone_number: event.target.value,
    });
  }

  const handleEmailAdd = (event) => {
    setContactInfo({
      ...contactInfo,
      email: event.target.value,
    });
  }

  const saveButton = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_CONTACT_INFO',
      payload: contactInfo
  })
  }

  return (
    <div className="container">
      <h1>My Account</h1>
      <p>Contact Info</p>
      <form onSubmit={(event) => saveButton(event)}>  
        <label for="first_name">First Name</label>
        <input type="text" id="first_name" onChange={handleFirstNameAdd} placeholder="First Name" value={contactInfoReducer.first_name}/><br />
        <label for="last_name">Last Name</label>
        <input type="text" id="last_name" onChange={handleLastNameAdd} placeholder="Last Name" value={contactInfoReducer.last_name}/><br />
        <label for="phone_number">Phone Number</label>
        <input type="number" id="phone_number" onChange={handlePhoneNumberAdd} placeholder="Phone Number" value={contactInfoReducer.phone_number}/><br />
        <label for="email">Email</label>
        <input type="text" id="email" onChange={handleEmailAdd} placeholder="Email Address(optional)" value={contactInfoReducer.email}/><br />          
        <button className="saveButton" type="submit">Save</button>
      </form>
    </div>
  );
}

export default MyAccount;
