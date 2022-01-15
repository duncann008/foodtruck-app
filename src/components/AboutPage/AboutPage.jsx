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
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


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
          <h1>About Us</h1>
          <form onSubmit={saveButton}>
            <TextField 
              type="text" 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddPhotoAlternateIcon />
                  </InputAdornment>
                )
              }}
              onChange={handleImageUrlChange} 
              variant="outlined"
              label="Image URL"
              size="small"
              defaultValue={aboutContactReducer.image_url || ''}/><br /><br />
            <TextField 
              style={{width: 300}}
              size="large"
              multiline
              type="text" 
              onChange={handleAboutUsChange}
              maxRows={8}
              variant="outlined"
              label="About Us"
              defaultValue={aboutContactReducer.about_us || ''}/><br /><br />        
            <TextField 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhoneIcon />
                  </InputAdornment>
                )
              }}
              type="text"  
              onChange={handleOwnerNameChange} 
              variant="outlined"
              label="Owner Name"
              size="small"
              defaultValue={aboutContactReducer.owner_name || ' '}/><br /><br />
            <TextField 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhoneIcon />
                  </InputAdornment>
                )
              }}
              type="text"  
              onChange={handleTruckNumberChange} 
              variant="outlined"
              label="Truck Number"
              size="small"
              defaultValue={aboutContactReducer.truck_number || ' '}/><br /><br />
            <TextField 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon />
                  </InputAdornment>
                )
              }}
              type="text"  
              onChange={handleEmailChange} 
              variant="outlined"
              label="Email"
              size="small"
              defaultValue={aboutContactReducer.email || ' '}/><br /><br />
            <TextField 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InstagramIcon />
                  </InputAdornment>
                )
              }}
              type="text"  
              onChange={handleInstagramChange} 
              variant="outlined"
              label="Instagram"
              size="small"
              defaultValue={aboutContactReducer.instagram || ' '}/><br /><br />
            <TextField 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TwitterIcon />
                  </InputAdornment>
                )
              }}
              type="text"  
              onChange={handleTwitterChange} 
              variant="outlined"
              label="Twitter"
              size="small"
              defaultValue={aboutContactReducer.twitter || ' '}/><br /><br />  
            <Button 
              type="submit"
              variant="contained"
              size="small"
              color="success"
            >Save Changes</Button>        
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
      <p><PersonIcon /> {aboutContactReducer.owner_name}</p>
      <p><LocalPhoneIcon /> {aboutContactReducer.truck_number}</p>
      <p><AlternateEmailIcon /> {aboutContactReducer.email}</p>
      <p><InstagramIcon /> {aboutContactReducer.instagram}</p>
      <p><TwitterIcon /> {aboutContactReducer.twitter}</p>
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
