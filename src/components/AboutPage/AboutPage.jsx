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
    console.log(event.target.value);
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
      truck_number: event.target.value,
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
      instagram: event.target.value,
    });
  }

  const handleTwitterAdd = (event) => {
    setOwnerContact({
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


  if (user.role === 'admin'){
  return (
    <div className="container">
        <form onSubmit={(event) => aboutUsSaveButton(event)}>
          <label hmtlFor="aboutUs">About Us</label>
          <textarea id="aboutUs" onChange={(event) => handleAboutUsAdd(event)} value="someSTring" />
          <button>Save</button>
        </form>
        <form onSubmit={(event) => ownerContactSaveButton(event)}>  
          <label htmlFor="owner">Owner Name</label>
          <input className="contactOwner" type="text" id="owner" onChange={handleOwnerNameAdd} placeholder="Owner Name" defaultValue={contactOwnerReducer.owner_name} /><br />
          <label htmlFor="truck_number">Truck Number</label>
          <input className="contactOwner" type="number" id="truck_number" onChange={handleTruckNumberAdd} placeholder="Truck Number" defaultValue={contactOwnerReducer.truck_number} /><br />
          <label htmlFor="email">Email</label>
          <input className="contactOwner" type="text" id="email" onChange={handleEmailAdd} placeholder="Email Address" defaultValue={contactOwnerReducer.email} /><br />
          <label htmlFor="Instagram">Instagram</label>
          <input className="contactOwner" type="text" id="Instagram" onChange={handleInstagramAdd} placeholder="Instagram" defaultValue={contactOwnerReducer.instagram} /><br />
          <label htmlFor="Twitter">Twitter</label>
          <input className="contactOwner" type="text" id="Twitter" onChange={handleTwitterAdd} placeholder="Twitter" defaultValue={contactOwnerReducer.twitter} /><br />          
          <button className="saveButton" type="submit">Save</button>
        </form>
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
