import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {

  const dispatch = useDispatch();
  const aboutUsReducer = useSelector(store => store.aboutUsReducer);
  const user = useSelector((store) => store.user);
  const contactOwnerReducer = useSelector(store => store.contactOwnerReducer);


  const handleAboutUsChange = (event) => {
    dispatch({
      type: 'EDIT_ABOUT_US',
      payload: event.target.value
    })
  }

  const handleOwnerNameChange = (event) => {
    dispatch({
      type: 'EDIT_OWNER_NAME',
      payload: event.target.value
    })
  }

  const handleTruckNumberChange = (event) => {
    dispatch({
      type: 'EDIT_TRUCK_NUMBER',
      payload: event.target.value
    })
  }

  const handleEmailChange = (event) => {
    dispatch({
      type: 'EDIT_EMAIL',
      payload: event.target.value
    })
  }

  const handleInstagramChange = (event) => {
    dispatch({
      type: 'EDIT_INSTAGRAM',
      payload: event.target.value
    })
  }

  const handleTwitterChange = (event) => {
    dispatch({
      type: 'EDIT_TWITTER',
      payload: event.target.value
    })
  }



  if (user.role === 'admin'){
  return (
    <div className="container">
          <p>All typed changes are saved automatically.</p>
        
          <label hmtlFor="aboutUs">About Us</label>
          <textarea id="aboutUs" onChange={handleAboutUsChange} value={aboutUsReducer || ''} /><br />
          
    
         
          <label htmlFor="owner">Owner Name</label>
          <input className="contactOwner" type="text" id="owner" onChange={handleOwnerNameChange} placeholder="Owner Name" value={contactOwnerReducer.owner_name || ''} /><br />
          <label htmlFor="truck_number">Truck Number</label>
          <input className="contactOwner" type="number" id="truck_number" onChange={handleTruckNumberChange} placeholder="Truck Number" value={contactOwnerReducer.truck_number || ''} /><br />
          <label htmlFor="email">Email</label>
          <input className="contactOwner" type="text" id="email" onChange={handleEmailChange} placeholder="Email Address" value={contactOwnerReducer.email || ''} /><br />
          <label htmlFor="Instagram">Instagram</label>
          <input className="contactOwner" type="text" id="Instagram" onChange={handleInstagramChange} placeholder="Instagram" value={contactOwnerReducer.instagram || ''} /><br />
          <label htmlFor="Twitter">Twitter</label>
          <input className="contactOwner" type="text" id="Twitter" onChange={handleTwitterChange} placeholder="Twitter" value={contactOwnerReducer.twitter || ''} /><br />          
          
        
    </div>
    
  );
  }
  else {
    return (
      <div className="container">
      <div>
        <p>{aboutUsReducer}</p>
      </div>
      <div>
        <p>{contactOwnerReducer.owner_name}</p>
        <p>{contactOwnerReducer.truck_number}</p>
        <p>{contactOwnerReducer.email}</p>
        <p>{contactOwnerReducer.instagram}</p>
        <p>{contactOwnerReducer.twitter}</p>
      </div>
    </div>
    )
  }
  
}

export default AboutPage;
