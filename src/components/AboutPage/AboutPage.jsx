import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AboutPage.css';
import { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { InputAdornment } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import Icon from '@mui/material/Icon';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const aboutContactReducer = useSelector(store => store.aboutContactReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_ABOUT_CONTACT',
    })
  }, [])

  const handleImageUrlChange = (event) => {
    dispatch({
      type: 'EDIT_IMAGE_URL',
      payload: event.target.value
    })
  }

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

  const saveButton = (event) => {
    event.preventDefault();
    dispatch({
      type: 'EDIT_ABOUT_CONTACT',
      payload: {
              image_url: aboutContactReducer.image_url,
              about_us: aboutContactReducer.about_us,
              owner_name: aboutContactReducer.owner_name,
              truck_number: aboutContactReducer.truck_number,
              email: aboutContactReducer.email,
              instagram: aboutContactReducer.instagram,
              twitter: aboutContactReducer.twitter
      }
  })
  }


  switch(user.role){
    case 'admin':
      return (
        <>
        <div className="updateForm">
          <form onSubmit={saveButton}>
            <label htmlFor="image_url">Image URL</label>
            <input className="aboutContact" type="text" id="image_url" onChange={handleImageUrlChange} placeholder="Image URL" value={aboutContactReducer.image_url || ''} /><br />
            <label hmtlFor="aboutUs">About Us</label>
            <textarea id="aboutUs" onChange={handleAboutUsChange} value={aboutContactReducer.about_us || ''} /><br />        
            <label htmlFor="owner">Owner Name</label>
            <input className="aboutContact" type="text" id="owner" onChange={handleOwnerNameChange} placeholder="Owner Name" value={aboutContactReducer.owner_name || ''} /><br />
            <label htmlFor="truck_number">Truck Number</label>
            <input className="aboutContact" type="number" id="truck_number" onChange={handleTruckNumberChange} placeholder="Truck Number" value={aboutContactReducer.truck_number || ''} /><br />
            <label htmlFor="email">Email</label>
            <input className="aboutContact" type="text" id="email" onChange={handleEmailChange} placeholder="Email Address" value={aboutContactReducer.email || ''} /><br />
            <label htmlFor="Instagram">Instagram</label>
            <input className="aboutContact" type="text" id="Instagram" onChange={handleInstagramChange} placeholder="Instagram" value={aboutContactReducer.instagram || ''} /><br />
            <label htmlFor="Twitter">Twitter</label>
            <input className="aboutContact" type="text" id="Twitter" onChange={handleTwitterChange} placeholder="Twitter" value={aboutContactReducer.twitter || ''} /><br />  
            <button type="submit">Save</button>        
            </form>
        
    </div>
    <div className="previewForm">
    <div>
    <h1>Customer View:</h1>
    <a href={aboutContactReducer.image_url}><img height="300px" src={aboutContactReducer.image_url}/></a>
      <h1>About Us:</h1>
      <p>{aboutContactReducer.about_us}</p>
    </div>
    <div>
      <h1>Contact Us:</h1>
      <p>{aboutContactReducer.owner_name}</p>
      <p>{aboutContactReducer.truck_number}</p>
      <p>{aboutContactReducer.email}</p>
      <p><InstagramIcon /> {aboutContactReducer.instagram}</p>
      <p>{aboutContactReducer.twitter}</p>
    </div>
  </div>
  </>
    
  );
  
  default:
    return (
      <>
      <div className="justBeCentered">
      <div>
      <a href={aboutContactReducer.image_url}><img height="300px" src={aboutContactReducer.image_url}/></a>
        <h1>About Us:</h1>
        <p className='padding'>{aboutContactReducer.about_us}</p>
      </div>
      <div>
        <h1>Contact Us:</h1>
        <p><PersonIcon /> {aboutContactReducer.owner_name}</p>
        <p><LocalPhoneIcon /> {aboutContactReducer.truck_number}</p>
        <p><AlternateEmailIcon /> {aboutContactReducer.email}</p>
        <p><InstagramIcon /> {aboutContactReducer.instagram}</p>
        <p><TwitterIcon /> {aboutContactReducer.twitter}</p>
      </div>
    </div>
    </>
    )
  }
  
}

export default AboutPage;
