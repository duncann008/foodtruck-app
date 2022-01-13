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
  const orderListReducer = useSelector(store => store.orderListReducer);
  const favoritesReducer = useSelector(store => store.favoritesReducer);

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
      }  
    
  const removeFromFavorites = (param) => {
    dispatch({
      type: 'DELETE_FAVORITE',
      payload: param.order_id
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
        <label htmlfor="first_name">First Name</label>
        <input type="text" id="first_name" onChange={handleFirstNameChange} placeholder="First Name" value={contactInfoReducer.first_name || ''}/><br />
        <label htmlfor="last_name">Last Name</label>
        <input type="text" id="last_name" onChange={handleLastNameChange} placeholder="Last Name" value={contactInfoReducer.last_name || ''}/><br />
        <label htmlfor="phone_number">Phone Number</label>
        <input type="number" id="phone_number" onChange={handlePhoneNumberChange} placeholder="Phone Number" value={contactInfoReducer.phone_number || ''}/><br />
        <label htmlfor="email">Email</label>
        <input type="text" id="email" onChange={handleUserEmailChange} placeholder="Email Address(optional)" value={contactInfoReducer.email || ''}/><br />          
        <button className="saveButton" type="submit">Save</button>
      </form>
      <h3>Favorites:</h3>
      {favoritesReducer.map((item, index) =>   {
        if (cartArray.includes(item.order_id)) {
          return <p key={index}>{item.item}  -  {item.quantity}</p>;
        }
        else  {
          cartArray.push(item.order_id)
          return <div>
            <br /> 
            <br />
            <button onClick={() => addFavoriteToCart(item)}>Add to Cart</button><button onClick={() => removeFromFavorites(item)}>Remove Favorite</button>  
            <p key={index}>{item.item}  -  {item.quantity}</p>
            
          </div>;
  }
      
})}
      <h3>Recent Orders</h3>
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
    </div>
  );
}

export default MyAccount;


