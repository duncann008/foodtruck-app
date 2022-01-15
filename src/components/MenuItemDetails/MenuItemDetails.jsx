import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { InputAdornment } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function MenuItemDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const cartReducer = useSelector(store => store.cartReducer);
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const [itemQuantity, setItemQuantity] = useState(1);
  const Swal = require('sweetalert2')
  
 

  useEffect(() => {
    dispatch({
      type: 'FETCH_MENU_ITEM',
      payload: params.id
    })
  }, [params.id])

  const menuItem = useSelector(store => store.menuItemReducer)

  const ingredients = (ingredient) => {
    switch (ingredient) {
      case null:
        return false;
      default:
        return true;
    }
  };

  let cartItem = {};

  const handleQuantityChange = (event) => {
    setItemQuantity(event.target.value)
    cartItem.quantity = Number(itemQuantity);
    return cartItem;
  }

  const addToCart = (event) => {
    event.preventDefault();
    cartItem.user_id = user.id;
    handleQuantityChange(event);
    cartItem.menu_id =  menuItem.menu_id;
    cartItem.item = menuItem.item;
    cartItem.price = menuItem.price;
    console.log(cartItem)
    dispatch({
      type: 'ADD_TO_CART',
      payload: cartItem
    })
    history.push('/menu');
  }

  const handleItemChange = (event) => {
    dispatch({
        type: 'EDIT_ITEM',
        payload: event.target.value
    })
}

  const handleImageUrlChange = (event) => {
    dispatch({
        type: 'EDIT_IMAGE_URL',
        payload: event.target.value
    })
}
  const handlePriceChange = (event) => {
    dispatch({
        type: 'EDIT_PRICE',
        payload: event.target.value
    })
}

  const handleDescriptionChange = (event) => {
    dispatch({
        type: 'EDIT_DESCRIPTION',
        payload: event.target.value
    })
}


  const handleShellChange = (event) => {
    dispatch({
      type: 'EDIT_SHELL',
      payload: event.target.value
    })
  }
  const handleMeatChange = (event) => {
    dispatch({
      type: 'EDIT_MEAT',
      payload: event.target.value
    })
  }
  const handleCheeseChange = (event) => {
    dispatch({
      type: 'EDIT_CHEESE',
      payload: event.target.value
    })
  }
  const handleBeansChange = (event) => {
    dispatch({
      type: 'EDIT_BEANS',
      payload: event.target.value
    })
  }
  const handleRiceChange = (event) => {
    dispatch({
      type: 'EDIT_RICE',
      payload: event.target.value
    })
  }
  const handleLettuceChange = (event) => {
    dispatch({
      type: 'EDIT_LETTUCE',
      payload: event.target.value
    })
  }
  const handleSalsaChange = (event) => {
    dispatch({
      type: 'EDIT_SALSA',
      payload: event.target.value
    })
  }
  const handleSourCreamChange = (event) => {
    dispatch({
      type: 'EDIT_SOUR_CREAM',
      payload: event.target.value
    })
  }
  const handlePicoChange = (event) => {
    dispatch({
      type: 'EDIT_PICO',
      payload: event.target.value
    })
  }
  const handleCilantroChange = (event) => {
    dispatch({
      type: 'EDIT_CILANTRO',
      payload: event.target.value
    })
  }
  const handleOnionsChange = (event) => {
    dispatch({
      type: 'EDIT_ONIONS',
      payload: event.target.value
    })
  }
  const handleSauceChange = (event) => {
    dispatch({
      type: 'EDIT_SAUCE',
      payload: event.target.value
    })
  }
  const handleCornChange = (event) => {
    dispatch({
      type: 'EDIT_CORN',
      payload: event.target.value
    })
  }
  const handleLimeChange = (event) => {
    dispatch({
      type: 'EDIT_LIME',
      payload: event.target.value
    })
  }

  const saveItemButton = (event) => {
    event.preventDefault();
    dispatch({
      type: 'EDIT_MENU_ITEM',
      payload: menuItem
  })
  }

  const backToMenu = () =>  {
    if (user.role === 'admin')  {
    Swal.fire({
      title: 'Do you want to save? Any unsaved changes will be lost.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Save',
      denyButtonText: `Don't Save`,
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: 'EDIT_MENU_ITEM',
          payload: menuItem
      })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        history.push('/menu');
      }
    })
  }
  else  {
    history.push('/menu');
  }
}
  


  if (user.role === 'user')  {
  return (

    <div>
        <h1>{menuItem.item}</h1>
        <img src={menuItem.image_url} height="250" width="200" />
        <p>{menuItem.description}</p>
        <p>${menuItem.price}</p>
        <h4>Included Ingredients:</h4>
            {ingredients(menuItem.Shell) ? <p>Shell: {menuItem.Shell}</p> : ''}
            {ingredients(menuItem.Meat) ? <p>Meat: {menuItem.Meat}</p> : ''}
            {ingredients(menuItem.Cheese) ? <p>Cheese: {menuItem.Cheese}</p> : ''}
            {ingredients(menuItem.Beans) ? <p>Beans: {menuItem.Beans}</p> : ''}
            {ingredients(menuItem.Rice) ? <p>Rice: {menuItem.Rice}</p> : ''}
            {ingredients(menuItem.Lettuce) ? <p>Lettuce: {menuItem.Lettuce}</p> : ''}
            {ingredients(menuItem.Salsa) ? <p>Salsa: {menuItem.Salsa}</p> : ''}
            {ingredients(menuItem.SourCream) ? <p>Sour Cream: {menuItem.SourCream}</p> : ''}
            {ingredients(menuItem.PicodeGallo) ? <p>Pico de Gallo: {menuItem.PicodeGallo}</p> : ''}
            {ingredients(menuItem.Cilantro) ? <p>Cilantro: {menuItem.Cilantro}</p> : ''}
            {ingredients(menuItem.DicedOnions) ? <p>Diced Onions: {menuItem.DicedOnions}</p> : ''}
            {ingredients(menuItem.Sauce) ? <p>Sauce: {menuItem.Sauce}</p> : ''}
            {ingredients(menuItem.Lime) ? <p>Lime: {menuItem.Lime}</p> : ''}
        <form onSubmit={addToCart}>
        <select name="Quantity" id="Quantity" onChange={handleQuantityChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br /><br />
        <Button 
              type="submit"
              startIcon={<AddShoppingCartIcon />}
              variant="contained"
              sx={{width: '175px'}}
              color="success"
              >Add to Cart</Button>
        </form>
        <br />
        <Button 
            variant="contained"
            sx={{width: '175px'}}
            startIcon={<ArrowBackIosIcon />}
            onClick={(event) => backToMenu(event)}>Back to menu
          </Button>
    </div>

  )}
  else 
    return (
      <div>
        <h1>Edit Page</h1>
        <form onSubmit={(event) => saveItemButton(event)}>
          <label htmlFor="Item">Name:</label>
          <input id="Item" onChange={handleItemChange} defaultValue={menuItem.item || ''} /><br />
          <img
              src={menuItem.image_url} 
              alt={menuItem.item}
              height="300"
              />
          <br />
          <label htmlFor="ImageURL">Image URL:</label>
          <input id="ImageURL" onChange={handleImageUrlChange} defaultValue={menuItem.image_url || ''} /><br />
          <label hmtlFor="Description">Description:</label>
          <textarea id="Description" onChange={handleDescriptionChange} value={menuItem.description || ''} /><br />
          <label htmlFor="Price">Price: $</label>
          <input id="Price" onChange={handlePriceChange} defaultValue={menuItem.price || ''} /><br /><br />
          <h4>Edit Ingredients:</h4>
          <p>By default, a blank input will prevent an ingredient from being included.</p>
          <label htmlFor="Shell">Shell:</label>
          <input id="Shell" onChange={handleShellChange} defaultValue={menuItem.Shell} /><br />
          <label htmlFor="Meat">Meat:</label>
          <input id="Meat" onChange={handleMeatChange} defaultValue={menuItem.Meat} /><br />
          <label htmlFor="Beans">Beans:</label>
          <input id="Beans" onChange={handleBeansChange} defaultValue={menuItem.Beans} /><br />
          <label htmlFor="Cheese">Cheese:</label>
          <input id="Cheese" onChange={handleCheeseChange} defaultValue={menuItem.Cheese} /><br />
          <label htmlFor="Rice">Rice:</label>
          <input id="Rice" onChange={handleRiceChange} defaultValue={menuItem.Rice} /><br />
          <label htmlFor="Lettuce">Lettuce:</label>
          <input id="Lettuce" onChange={handleLettuceChange} defaultValue={menuItem.Lettuce} /><br />
          <label htmlFor="Salsa">Salsa:</label>
          <input id="Salsa" onChange={handleSalsaChange} defaultValue={menuItem.Salsa} /><br />
          <label htmlFor="SourCream">Sour Cream:</label>
          <input id="SourCream" onChange={handleSourCreamChange} defaultValue={menuItem.SourCream} /><br />
          <label htmlFor="Pico">Pico de Gallo:</label>
          <input id="Pico" onChange={handlePicoChange} defaultValue={menuItem.PicodeGallo} /><br />
          <label htmlFor="Cilantro">Cilantro:</label>
          <input id="Cilantro" onChange={handleCilantroChange} defaultValue={menuItem.Cilantro} /><br />
          <label htmlFor="DicedOnions">Diced Onions:</label>
          <input id="DicedOnions" onChange={handleOnionsChange} defaultValue={menuItem.DicedOnions} /><br />
          <label htmlFor="Sauce">Sauce:</label>
          <input id="Sauce" onChange={handleSauceChange} defaultValue={menuItem.Sauce} /><br />
          <label htmlFor="Lime">Lime:</label>
          <input id="Lime" onChange={handleLimeChange} defaultValue={menuItem.Lime} /><br />
          <label htmlFor="Corn">Corn:</label>
          <input id="Corn" onChange={handleCornChange} defaultValue={menuItem.Corn} /><br />
          <button type="submit">Save</button><button type="button" onClick={backToMenu}>Back To Menu</button>
        </form>
      </div>
    )
}


export default MenuItemDetails;