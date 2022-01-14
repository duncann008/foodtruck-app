import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { TextField } from '@material-ui/core';
import { InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './Checkout.css';


function Checkout() {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const cartReducer = useSelector(store => store.cartReducer);
    const contactInfoReducer = useSelector((store) => store.contactInfoReducer);
    const orderReducer = useSelector(store => store.orderReducer)
    const [notes, setNotes] = useState(' ');
    const [favorite, setFavorite] = useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


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
              first_name: contactInfoReducer.first_name,
              last_name: contactInfoReducer.last_name,
              phone_number: contactInfoReducer.phone_number,
              email: contactInfoReducer.email,
              user_id: user.id
          }
      })
      }

      const handleNotesChange = (event) => {
        setNotes(event.target.value)
        dispatch({
          type: 'SET_NOTES',
          payload: notes
        })
      }

      const sumPriceTotal = () =>  {
        let totalArray = [];
        cartReducer.map((item) =>   {
            let price = Number(item.price)
            let quantity = Number(item.quantity)
            let totalPrice = price * quantity;

            totalArray.push(totalPrice)
        })
        let total = 0;
        for (let i=0; i < totalArray.length; i++)   {
            total += totalArray[i];
        }
        let finalTotal = total.toFixed(2);

        return finalTotal;
    }

    const handleFavoritesAdd = () => {
      setFavorite(!favorite);
    }

    let favoriteArray = []
    cartReducer.map((item) =>  {
      favoriteArray.push({
        menu_id: item.menu_id,
        quantity: item.quantity
      })
    })
    console.log(favoriteArray)
    const placeOrder = () =>  {
      console.log(notes)
      dispatch({
        type: 'SET_ORDER',
        payload: {
          time_of_order: new Date().toLocaleString(),
          notes: notes,
          total_price: sumPriceTotal(),
          favorited: favorite,
          menuItemArray: cartReducer
        }
      })
    
      history.push('/confirmation')
      
    }




  
    return  (
        <div>
            <h1>Contact Info:</h1>
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
            <h1>Order Details:</h1>
            
                {cartReducer.map((item, index) =>  
                    <p key={index}>{item.quantity}  -  {item.item}   -   ${item.price * item.quantity}</p>
                  )}
            
            <p>Total Price: ${sumPriceTotal()}</p><br />
            <TextField 
              style={{width: 300}}
              size="large"
              multiline
              type="text" 
              onChange={handleNotesChange}
              maxRows={8}
              variant="outlined"
              label="Notes, comments, or requests"
              value={notes}/><br />
            <div className="checkoutFavoriteDiv">Favorite:</div><Checkbox
              {...label}
              icon={<StarBorderIcon />}
              checkedIcon={<StarIcon />}
              onChange={(event) => handleFavoritesAdd(event)}
            />    
            <button onClick={placeOrder}>Place Order</button>
        </div>
    )}

    
export default Checkout;