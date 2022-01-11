import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';


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
      case 'None':
        return false;
      default:
        return true;
    }
  };

  const handleQuantityChange = (event) => {
    setItemQuantity(event.target.value)
    menuItem.quantity = Number(itemQuantity);
    return menuItem;
  }

  const addToCart = (event) => {
    event.preventDefault();
    menuItem.user_id = user.id;
    handleQuantityChange(event);
    console.log(menuItem)
    dispatch({
      type: 'ADD_TO_CART',
      payload: menuItem
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
    Swal.fire({
      title: 'Do you want to save? Any unsaved changes will be lost.',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: 'Cancel Item Creation',
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
  


  if (user.role === 'user')  {
  return (

    <div>
        <h1>{menuItem.item}</h1>
        <img src={menuItem.image_url} height="200" />
        <p>Included Ingredients:</p>
        <ul>
            {ingredients(menuItem.Shell) ? <li>Shell: {menuItem.Shell}</li> : ''}
            {ingredients(menuItem.Meat) ? <li>Meat: {menuItem.Meat}</li> : ''}
            {ingredients(menuItem.Cheese) ? <li>Cheese: {menuItem.Cheese}</li> : ''}
            {ingredients(menuItem.Beans) ? <li>Beans: {menuItem.Beans}</li> : ''}
            {ingredients(menuItem.Rice) ? <li>Rice: {menuItem.Rice}</li> : ''}
            {ingredients(menuItem.Lettuce) ? <li>Lettuce: {menuItem.Lettuce}</li> : ''}
            {ingredients(menuItem.Salsa) ? <li>Salsa: {menuItem.Salsa}</li> : ''}
            {ingredients(menuItem.SourCream) ? <li>Sour Cream: {menuItem.SourCream}</li> : ''}
            {ingredients(menuItem.PicodeGallo) ? <li>Pico de Gallo: {menuItem.PicodeGallo}</li> : ''}
            {ingredients(menuItem.Cilantro) ? <li>Cilantro: {menuItem.Cilantro}</li> : ''}
            {ingredients(menuItem.DicedOnions) ? <li>Diced Onions: {menuItem.DicedOnions}</li> : ''}
            {ingredients(menuItem.Sauce) ? <li>Sauce: {menuItem.Sauce}</li> : ''}
            {ingredients(menuItem.Lime) ? <li>Lime: {menuItem.Lime}</li> : ''}
        </ul>
        <form onSubmit={addToCart}>
        <select name="Quantity" id="Quantity" onChange={handleQuantityChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Add To Cart</button>
        </form>
        <button onClick={backToMenu}>Back to Menu</button>
    </div>

  )}
  else 
    return (
      <div>
        <p>Included Ingredients:</p>
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
          <input id="Price" onChange={handlePriceChange} defaultValue={menuItem.price || ''} /><br />
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