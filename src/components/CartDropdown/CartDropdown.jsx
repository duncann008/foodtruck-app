import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './CartDropdown.css';

function CartDropdown() {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const cartReducer = useSelector(store => store.cartReducer);
    const user = useSelector((store) => store.user);

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
        history.push('/cart');
    }
    
    const removeItemFromCart = (index) =>    {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: cartReducer[index]
        })
    }

    console.log(cartReducer[0]);

    if (user.role === user) {
    return  (
        <div className='dropdownCart'>
            THIS IS THE DROPDOWN
            <ul>
            {cartReducer.map((item, index) =>    
                <li key={index}>{item.item} ${item.price}<button onClick={() => {removeItemFromCart(index)}}>X</button></li>)}
            </ul>
            <p>Total Price: {sumPriceTotal()}</p>
            <button onClick={goToCheckout}>Checkout</button>
        </div>
    )}
    else {
        return (
            <></>
        )
    }
}

    
export default CartDropdown;