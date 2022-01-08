import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Checkout() {
    
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
        return finalTotal;
    }

  
    return  (
        <div>
            <h1>Contact Info:</h1>
            <p>Name: {contactInfoReducer.first_name} {contactInfoReducer.last_name}</p>
            <p>Phone Number: {contactInfoReducer.phone_number}</p>
            <p>Email: {contactInfoReducer.email}</p>
            <h1>Order Details:</h1>
            
                {cartReducer.map((item, index) =>    
                    <p key={index}>{item.quantity}  -  {item.item}   -   ${item.price * item.quantity}</p>
                )}
            
            <p>Total Price: {sumPriceTotal()}</p>
            <button>Back to Menu</button>
            <button>Place Order</button>
        </div>
    )}

    
export default Checkout;