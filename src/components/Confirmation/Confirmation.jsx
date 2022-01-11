import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Confirmation() {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const cartReducer = useSelector(store => store.cartReducer);
    const user = useSelector((store) => store.user);
    const confirmationReducer = useSelector(store => store.confirmationReducer);


    useEffect(() => {
      dispatch({
        type: 'FETCH_CONFIRMATION'
      })
      return  () => {
        dispatch({
          type: 'CLEAR_CART'
        })
      }
    }, [])
    
    const routeBackHome = () => {
      history.push('/user')
    }

    return  (
        <div>
          <h1>Thank you for your order!</h1>
          <p>ORDER NUMBER: {confirmationReducer.order_id}</p>
          <p>Time Of Order: {confirmationReducer.time_of_order}</p>
            {cartReducer.map((item, index) =>    
                    <p key={index}>{item.quantity}  -  {item.item}   -   ${item.price * item.quantity}</p>
                )}
          <p>Notes, comments, requests: {confirmationReducer.notes}</p>
          <button onClick></button>
        </div>
    )
}

    
export default Confirmation;