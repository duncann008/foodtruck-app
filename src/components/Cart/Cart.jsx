import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Cart() {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const cartReducer = useSelector(store => store.cartReducer);

  
    return  (
        <div>
            <ul>
            {cartReducer.map((item, index) =>    
                <li key={index}>{item.item}<br></br>{item.price}</li>
            )}
            </ul>
        </div>
    )}

    
export default Cart;