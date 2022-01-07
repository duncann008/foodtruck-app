import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Cart() {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const cartReducer = useSelector(store => store.cartReducer);
    const contactInfoReducer = useSelector((store) => store.contactInfoReducer);

    useEffect(() => {
        dispatch({
          type: 'FETCH_CONTACT_INFO',
          payload: user.id
        })
      }, [])

  
    return  (
        <div>
            <h1>Contact Info:</h1>
            <p>Name: {contactInfoReducer.first_name} {contactInfoReducer.last_name}</p>
            <p>Phone Number: {contactInfoReducer.phone_number}</p>
            <p>Email: {contactInfoReducer.email}</p>
            <h1>Order Details:</h1>
            <ul>
                {cartReducer.map((item, index) =>    
                    <li key={index}>{item.item}   -   {item.price}</li>
                )}
            </ul>
            <button>Back to Menu</button>
            <button>Place Order</button>
        </div>
    )}

    
export default Cart;