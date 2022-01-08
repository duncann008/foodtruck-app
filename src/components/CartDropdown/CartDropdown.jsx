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
            let price = Number(item.price)
            let quantity = Number(item.quantity)
            let totalPrice = price * quantity;
            console.log(item.quantity)
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

    const goToCart = () =>  {
        history.push('/cart');
    }

    const handleQuantityChange = (event) => {
        menuItem.quantity = event.target.value;
        return menuItem;
      }
    
    const removeItemFromCart = (index) =>    {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: cartReducer[index]
        })
    }


    if (user.role === 'user') {
    return  (
        <div className='dropdownCart'>
            
            {cartReducer.map((item, index) =>    
                <p key={index}>{item.item} <select name="Quantity" id="Quantity" defaultValue={item.quantity} onChange={handleQuantityChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>${item.price}<button onClick={() => {removeItemFromCart(index)}}>X</button></p>)}
            
            <p>Total Price: {sumPriceTotal()}</p>
            <button onClick={goToCart}>Cart</button>
        </div>
    )}
    else {
        return (
            <></>
        )
    }
}

    
export default CartDropdown;