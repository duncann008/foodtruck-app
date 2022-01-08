import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Cart() {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const cartReducer = useSelector(store => store.cartReducer);
    

    useEffect(() => {
        dispatch({
          type: 'FETCH_CONTACT_INFO',
          payload: user.id
        })
      }, [])

      const sumPriceTotal = () =>  {
        let totalArray = [];
        cartReducer.map((item) =>   {
            let number = Number(item.price)
            totalArray.push(number)
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

    const goToCheckout = () =>  {
        history.push('/checkout');
    }

    const backToMenu = () =>  {
        history.push('/menu');
    }
  
    return  (
        <div>
            <button onClick={backToMenu}>Back to Menu</button>
            <h1>Order Details:</h1>
            
            <ul>
                {cartReducer.map((item, index) =>    
                    <li key={index}>{item.item}   -   {item.price}<button onClick={() => {removeItemFromCart(index)}}>X</button></li>
                )}
            </ul>
            <p>Total Price: {sumPriceTotal()}</p>
            <button onClick={goToCheckout}>Checkout</button>
        </div>
    )}

    
export default Cart;