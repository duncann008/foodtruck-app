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
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';


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
        <TextField 
          type="text" 
          onChange={handleItemChange} 
          variant="outlined"
          label="Item Name"
          size="small"
          value={menuItem.item || ''}/><br />
          
            <img 
                className="borderImage"
                src={menuItem.image_url} 
                alt='Your Image Here'
                />
          <br />
          <TextField 
            type="text" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AddPhotoAlternateIcon />
                </InputAdornment>
              )
            }}
            onChange={handleImageUrlChange} 
            variant="outlined"
            label="Image URL"
            size="small"
            value={menuItem.image_url || ''}/><br /><br />
          <TextField 
            style={{width: 300}}
            size="large"
            multiline
            type="text" 
            onChange={handleDescriptionChange}
            maxRows={8}
            variant="outlined"
            label="Item Description"
            value={menuItem.description || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handlePriceChange} 
            variant="outlined"
            label="Price"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              )
            }}
            size="small"
            value={menuItem.price || ''}/><br /><br />
          <h3>Ingredients:</h3>
          <p>By default, a blank input will prevent an ingredient from being included.</p>
          <TextField 
            type="text"  
            onChange={handleShellChange} 
            variant="outlined"
            label="Shell"
            size="small"
            value={menuItem.Shell || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleMeatChange} 
            variant="outlined"
            label="Meat"
            size="small"
            value={menuItem.Meat || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleBeansChange} 
            variant="outlined"
            label="Beans"
            size="small"
            value={menuItem.Beans || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleCheeseChange} 
            variant="outlined"
            label="Cheese"
            size="small"
            value={menuItem.Cheese || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleRiceChange} 
            variant="outlined"
            label="Rice"
            size="small"
            value={menuItem.Rice || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleLettuceChange} 
            variant="outlined"
            label="Lettuce"
            size="small"
            value={menuItem.Lettuce || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleSalsaChange} 
            variant="outlined"
            label="Salsa"
            size="small"
            value={menuItem.Salsa || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleSourCreamChange} 
            variant="outlined"
            label="Sour Cream"
            size="small"
            value={menuItem.SourCream || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handlePicoChange} 
            variant="outlined"
            label="Pico de Gallo"
            size="small"
            value={menuItem.PicodeGallo || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleCilantroChange} 
            variant="outlined"
            label="Cilantro"
            size="small"
            value={menuItem.Cilantro || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleOnionsChange} 
            variant="outlined"
            label="Diced Onions"
            size="small"
            value={menuItem.DicedOnions || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleSauceChange} 
            variant="outlined"
            label="Sauce"
            size="small"
            value={menuItem.Sauce || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleCornChange} 
            variant="outlined"
            label="Corn"
            size="small"
            value={menuItem.Corn || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleLimeChange} 
            variant="outlined"
            label="Lime"
            size="small"
            value={menuItem.Lime || ''}/><br /><br /><br />
          <Button 
            type="submit"
            variant="contained"
            size="large"
            color="success"
          >Save Changes</Button>
          <Button 
            type="button"
            onClick={event => {backToMenu(event)}}
            variant="contained"
            size="large"
            sx={{ color: "white", backgroundColor: "red" }}
            startIcon={<CancelPresentationIcon />}
          >Back To Menu</Button>
        </form>
      </div>
    )
}


export default MenuItemDetails;