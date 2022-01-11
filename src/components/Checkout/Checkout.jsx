import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';


function Checkout() {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const cartReducer = useSelector(store => store.cartReducer);
    const contactInfoReducer = useSelector((store) => store.contactInfoReducer);
    const orderReducer = useSelector(store => store.orderReducer)
    const [notes, setNotes] = useState('');
    

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
        let finalTotal = total.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          });
        return total;
    }

    const placeOrder = () =>  {
      console.log(notes)
      dispatch({
        type: 'SET_ORDER',
        payload: {
          time_of_order: new Date().toLocaleString(),
          notes: notes,
          total_price: sumPriceTotal(),
          menuItemArray: cartReducer
        }
      })
      history.push('/confirmation')
    }

  
    return  (
        <div>
            <h1>Contact Info:</h1>
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
            <h1>Order Details:</h1>
            
                {cartReducer.map((item, index) =>    
                    <p key={index}>{item.quantity}  -  {item.item}   -   ${item.price * item.quantity}</p>
                )}
            
            <p>Total Price: {sumPriceTotal()}</p>
            <label hmtlFor="notes">Notes, comments, requests:</label>
            <textarea id="notes" onChange={handleNotesChange} value={notes} /><br />
            <button>Back to Menu</button>
            <button onClick={placeOrder}>Place Order</button>
        </div>
    )}

    
export default Checkout;