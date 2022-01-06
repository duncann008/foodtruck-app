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

  const [aboutUs, setAboutUs] = useState('');
  const [ownerContact, setOwnerContact] = useState({owner_name: '', truck_number: '', email: '', instagram: '', twitter: ''});

  const handleAboutUsAdd = (event) => {
    setAboutUs(event.target.value);
  }

  const handleOwnerNameAdd = (event) => {
    setOwnerContact({
      ...ownerContact,
      owner_name: event.target.value,
    });
  }

  const handleTruckNumberAdd = (event) => {
    setOwnerContact({
      ...ownerContact,
      first_name: event.target.value,
    });
  }

  const handleEmailAdd = (event) => {
    setOwnerContact({
      ...ownerContact,
      email: event.target.value,
    });
  }

  const handleInstagramAdd = (event) => {
    setOwnerContact({
      ...ownerContact,
      last_name: event.target.value,
    });
  }

  const handleTwitterAdd = (event) => {
    setContactInfo({
      ...ownerContact,
      twitter: event.target.value,
    });
  }

  const aboutUsSaveButton = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_ABOUT_US',
      payload: aboutUs
  })
  }

  const ownerContactSaveButton = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_OWNER_CONTACT',
      payload: ownerContact
  })
  }


  // document.getElementById("owner").value = `${contactOwnerReducer.owner_name}`
  // const defaultOwnerName = () =>  {
  //   // let ownerNameValue = contactOwnerReducer.owner_name;
  //   document.getElementById("owner").value = `${contactOwnerReducer.owner_name}`;
  // }

  if (user.role === 'admin'){
  return (
    <div className="container">
        <form onSubmit={(event) => aboutUsSaveButton(event)}>
          <label for="aboutUs">About Us</label>
          <textarea id="aboutUs" onChange={handleAboutUsAdd}>{aboutUsReducer}</textarea>
          <button>Save</button>
        </form>
        <form onSubmit={(event) => ownerContactSaveButton(event)}>  
          <label for="owner">Owner Name</label>
          <textarea rows="1" className="contactOwner" type="text" id="owner" onChange={handleOwnerNameAdd} placeholder="Owner Name">{contactOwnerReducer.owner_name}</textarea><br />
          <label for="truck_number">Truck Number</label>
          <textarea rows="1" className="contactOwner" type="number" id="truck_number" onChange={handleTruckNumberAdd} placeholder="Truck Number">{contactOwnerReducer.truck_number}</textarea><br />
          <label for="email">Email</label>
          <textarea rows="1" className="contactOwner" type="text" id="email" onChange={handleEmailAdd} placeholder="Email Address">{contactOwnerReducer.email}</textarea><br />
          <label for="Instagram">Instagram</label>
          <textarea rows="1" className="contactOwner"type="text" id="Instagram" onChange={handleInstagramAdd} placeholder="Instagram">{contactOwnerReducer.instagram}</textarea><br />
          <label for="Twitter">Twitter</label>
          <textarea rows="1" className="contactOwner" type="text" id="Twitter" onChange={handleTwitterAdd} placeholder="Twitter">{contactOwnerReducer.twitter}</textarea><br />          
          <button className="saveButton" type="submit">Save</button>
        </form>
    </div>
    
  );
  }
  else {
    return (
      <div className="container">
      <div>
        <p>{aboutUs}</p>
      </div>
    </div>
    )
  }
  
}

export default AboutPage;
