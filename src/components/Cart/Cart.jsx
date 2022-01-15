import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './Cart.css';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {FormControlLabel} from '@material-ui/core';

function Cart() {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const cartReducer = useSelector(store => store.cartReducer);
    const menuItem = useSelector(store => store.menuItemReducer);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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

    const startOrder = (event) =>  {
      event.preventDefault();
      history.push('/menu');
      }

    const ifEmpty = () => {
      if (cartReducer.length < 1) {
        return <div><h3>Uh oh.. There's nothing here!</h3>
          <Button 
            variant="contained"
            startIcon={<ArrowBackIosIcon />}
            onClick={(event) => startOrder(event)}>Back to menu
          </Button></div>
      }
      else  {
        return;
      }
    }
  
    return  (
      
        <div className="cartDiv">
            
            <h1>Cart:</h1>
            {ifEmpty()}
            <form onSubmit={goToCheckout}>
                {cartReducer.map((item, index) =>    
                    <p key={index}>{item.item} <select name="Quantity" id="Quantity" defaultValue={item.quantity} onChange={(event) => {handleQuantityChange(event, index)}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>   -   ${item.price}<Button 
                    type="button" 
                    onClick={() => {removeItemFromCart(index)}}
                    
                    
                    >
                      <RemoveCircleIcon />
                    </Button></p>
                )}
            
            <p>Total Price: {sumPriceTotal()}</p>
            <div className='goToBottom'>
            <FormControlLabel
              label="Check Out"
              labelPlacement='top'
              control={
              <IconButton
                type="submit"
                >
                <ShoppingCartCheckoutIcon 
                className="cartButton"
                style={{
                  fontSize: 64,
                }}
                />
              </IconButton>}>
            </FormControlLabel>
            </div>
            </form>
        </div>
        
    )}

    
export default Cart;