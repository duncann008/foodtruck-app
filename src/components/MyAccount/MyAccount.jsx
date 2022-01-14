import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { TextField } from '@material-ui/core';
import { InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './MyAccount.css';

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
  const orderListReducer = useSelector(store => store.orderListReducer);
  const favoritesReducer = useSelector(store => store.favoritesReducer);
  const Swal = require('sweetalert2');

  useEffect(() => {
    dispatch({
      type: 'FETCH_CONTACT_INFO',
      payload: user.id
    }),
    dispatch({
      type: 'FETCH_ORDERS'
    }),
    dispatch({
      type: 'FETCH_FAVORITES'
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

  const addFavoriteToCart = (param) =>  {
    let orderArray = favoritesReducer.filter(function(thing){
      return thing.order_id === param.order_id;
    })
    console.log(orderArray)
      for (let thing of orderArray) {
        dispatch({
          type: 'ADD_TO_CART',
          payload: {
            user_id: user.id,
            quantity: thing.quantity,
            menu_id: thing.menu_id,
            item: thing.item,
            price: thing.price
          }
        })}
        Swal.fire(
          'Added favorite to cart!'
        )
      }  
    
  const removeFromFavorites = (param) => {
    Swal.fire({
      title: `Remove favorite?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Remove`,
      denyButtonText: 'Cancel',
      icon: 'warning',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: 'DELETE_FAVORITE',
          payload: param.order_id
        })
      } else if (result.isDenied) {   
      }
    })   
  }
    
  

  const saveButton = (event) => {
    event.preventDefault();
        dispatch({
          type: 'EDIT_CONTACT_INFO',
          payload: {
              first_name: contactInfoReducer.first_name,
              last_name: contactInfoReducer.last_name,
              phone_number: contactInfoReducer.phone_number,
              email: contactInfoReducer.email,
              user_id: user.id
          }
      })
    }
    
  

  let timeArray = [];
  let cartArray = [];

  return (
    <div className="container">
      <h1>My Account</h1>
      <h3>Contact Info</h3>
      <form onSubmit={saveButton}>  
      <TextField 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            )
          }}
          size="small"
          type="text" 
          onChange={handleFirstNameChange}
          variant="outlined"
          label="First Name"
          value={contactInfoReducer.first_name || ''} /><br /><br />
        <TextField 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            )
          }}
          size="small"
          type="text" 
          onChange={handleLastNameChange}
          variant="outlined"
          label="Last Name"
          value={contactInfoReducer.last_name || ''}/><br /><br />
        <TextField 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneAndroidIcon />
              </InputAdornment>
            )
          }}
          size="small"
          type="text" 
          onChange={handlePhoneNumberChange}
          variant="outlined"
          label="Phone Number"
          value={contactInfoReducer.phone_number || ''}/><br /><br />
        <TextField 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            )
          }}
          size="small"
          type="text" 
          onChange={handleUserEmailChange}
          variant="outlined"
          label="Email"
          value={contactInfoReducer.email || ''}/><br /><br />          
        <Button 
              type="submit" 
              variant="contained"
              size="small"
              style={{color: "white"}}
              >Save Contact Info</Button>
      </form>
      <br />
      <h3>Favorites:</h3>
      {favoritesReducer.map((item, index) =>   {
        if (cartArray.includes(item.order_id)) {
          return <p key={index}>{item.item}  -  {item.quantity}</p>;
        }
        else  {
          cartArray.push(item.order_id)
          return <div className="favoriteDiv">
            <br /> 
            <p></p>
            <Button 
              onClick={() => addFavoriteToCart(item)}
              startIcon={<AddShoppingCartIcon />}
              variant="contained"
              size="small"
              color="success"
              >Add to Cart</Button>
            <Button 
              onClick={() => removeFromFavorites(item)}
              startIcon={<DeleteIcon />}
              size="small"
              color="error"
              >Remove Favorite</Button>  
            <p key={index}>{item.item}  -  {item.quantity}</p>
            
          </div>;
  }
      
})}   <br />
      <h3 className='favoriteDiv'>Recent Orders</h3>
      {orderListReducer.map((item, index) =>   {
          if (timeArray.includes(item.order_id)) {
            return <p key={index}>{item.item}  -  {item.quantity}</p>;
          }
          else  {
            timeArray.push(item.order_id)
            return <div>
              <p>Order #{item.order_id}  Time: {item.time_of_order}</p>
              <p key={index}>{item.item}  -  {item.quantity}</p>
            </div>;
          }
              
        })}
        <LogOutButton />
    </div>
  );
}

export default MyAccount;


