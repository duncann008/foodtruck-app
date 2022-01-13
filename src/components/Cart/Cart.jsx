import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Cart() {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const cartReducer = useSelector(store => store.cartReducer);
    const menuItem = useSelector(store => store.menuItemReducer);

    useEffect(() => {
        dispatch({
          type: 'FETCH_CONTACT_INFO',
          payload: user.id
        })
      }, [])
      

      const handleQuantityChange = (event, index) => {
        let convertedQuantity = Number(event.target.value);
        cartReducer[index].quantity = convertedQuantity;
        let quantityEdit = {arrayIndex: index, thePayload: cartReducer[index].quantity}
        dispatch({
          type: 'EDIT_CART_QUANTITY',
          payload: quantityEdit
        })
      }

      const removeItemFromCart = (index) =>    {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: cartReducer[index]
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
            
            <h1>Order Details:</h1>
            <form onSubmit={goToCheckout}>
                {cartReducer.map((item, index) =>    
                    <p key={index}>{item.item}<select name="Quantity" id="Quantity" defaultValue={item.quantity} onChange={(event) => {handleQuantityChange(event, index)}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>   -   {item.price}<button type="button" onClick={() => {removeItemFromCart(index)}}>X</button></p>
                )}
            
            <p>Total Price: {sumPriceTotal()}</p>
            <button type="submit">Checkout</button>
            </form>
        </div>
    )}

    
export default Cart;