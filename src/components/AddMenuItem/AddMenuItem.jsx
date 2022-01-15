import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react'
import { TextField } from '@material-ui/core';
import { InputAdornment } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import './AddMenuItem.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';



function AddMenuItem() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const menuListReducer = useSelector(store => store.menuListReducer);
  const Swal = require('sweetalert2');

  const addMenuItem = useSelector(store => store.addMenuItemReducer)

  useEffect(() => {
    dispatch({ type: 'FETCH_MENU_LIST' });
}, []);


  const handleItemChange = (event) => {
    dispatch({
        type: 'ADD_ITEM',
        payload: event.target.value
    })
}

  const handleImageUrlChange = (event) => {
    dispatch({
        type: 'ADD_IMAGE_URL',
        payload: event.target.value
    })
}
  const handlePriceChange = (event) => {
    dispatch({
        type: 'ADD_PRICE',
        payload: event.target.value
    })
}

  const handleDescriptionChange = (event) => {
    dispatch({
        type: 'ADD_DESCRIPTION',
        payload: event.target.value
    })
}


  const handleShellChange = (event) => {
    dispatch({
      type: 'ADD_SHELL',
      payload: event.target.value
    })
  }
  const handleMeatChange = (event) => {
    dispatch({
      type: 'ADD_MEAT',
      payload: event.target.value
    })
  }
  const handleCheeseChange = (event) => {
    dispatch({
      type: 'ADD_CHEESE',
      payload: event.target.value
    })
  }
  const handleBeansChange = (event) => {
    dispatch({
      type: 'ADD_BEANS',
      payload: event.target.value
    })
  }
  const handleRiceChange = (event) => {
    dispatch({
      type: 'ADD_RICE',
      payload: event.target.value
    })
  }
  const handleLettuceChange = (event) => {
    dispatch({
      type: 'ADD_LETTUCE',
      payload: event.target.value
    })
  }
  const handleSalsaChange = (event) => {
    dispatch({
      type: 'ADD_SALSA',
      payload: event.target.value
    })
  }
  const handleSourCreamChange = (event) => {
    dispatch({
      type: 'ADD_SOUR_CREAM',
      payload: event.target.value
    })
  }
  const handlePicoChange = (event) => {
    dispatch({
      type: 'ADD_PICO',
      payload: event.target.value
    })
  }
  const handleCilantroChange = (event) => {
    dispatch({
      type: 'ADD_CILANTRO',
      payload: event.target.value
    })
  }
  const handleOnionsChange = (event) => {
    dispatch({
      type: 'ADD_ONIONS',
      payload: event.target.value
    })
  }
  const handleSauceChange = (event) => {
    dispatch({
      type: 'ADD_SAUCE',
      payload: event.target.value
    })
  }
  const handleCornChange = (event) => {
    dispatch({
      type: 'ADD_CORN',
      payload: event.target.value
    })
  }
  const handleLimeChange = (event) => {
    dispatch({
      type: 'ADD_LIME',
      payload: event.target.value
    })
  }

  const addItemButton = (event) => {
    event.preventDefault();
    let foreignKey = menuListReducer[menuListReducer.length -1].id + 1;
    addMenuItem.menu_id = foreignKey;
    dispatch({
      type: 'ADD_MENU_ITEM',
      payload: addMenuItem
    })
    history.push('/menu');
  }

  const backToMenu = (event) =>  {
    event.preventDefault();
    Swal.fire({
      title: `Leave the page? Any unsaved changes will be lost.`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save and Leave`,
      denyButtonText: `Don't Save`,
      icon: 'warning',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-2 right-gap',
        confirmButton: 'order-1',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        addItemButton(event);
      } else if (result.isDenied) {
        history.push('/menu');
      }
    })
  }


    return (
      <div>
        <h1>Add Item</h1>
        <form onSubmit={(event) => addItemButton(event)}>
        <TextField 
          type="text" 
          id="current_location" 
          onChange={handleItemChange} 
          variant="outlined"
          label="Item Name"
          size="small"
          value={addMenuItem.item || ' '}/><br />
          
            <img 
                className="borderImage"
                src={addMenuItem.image_url} 
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
            value={addMenuItem.image_url || ' '}/><br /><br />
          <TextField 
            style={{width: 300}}
            size="large"
            multiline
            type="text" 
            onChange={handleDescriptionChange}
            maxRows={8}
            variant="outlined"
            label="Item Description"
            value={addMenuItem.description || ' '}/><br /><br />
          <TextField 
            type="text" 
            id="current_location" 
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
            value={addMenuItem.price || ' '}/><br /><br />
          <h3>Ingredients:</h3>
          <p>Leave "None" in the input field to not include an ingredient.</p>
          <TextField 
            type="text" 
            id="current_location" 
            onChange={handleShellChange} 
            variant="outlined"
            label="Shell"
            size="small"
            value={addMenuItem.Shell || 'None'}/><br /><br />
          <TextField 
            type="text" 
            id="current_location" 
            onChange={handleMeatChange} 
            variant="outlined"
            label="Meat"
            size="small"
            value={addMenuItem.Meat || 'None'}/><br /><br />
          <TextField 
            type="text" 
            id="current_location" 
            onChange={handleBeansChange} 
            variant="outlined"
            label="Beans"
            size="small"
            value={addMenuItem.Beans || 'None'}/><br /><br />
          <TextField 
            type="text" 
            id="current_location" 
            onChange={handleCheeseChange} 
            variant="outlined"
            label="Cheese"
            size="small"
            value={addMenuItem.Cheese || 'None'}/><br /><br />
          <TextField 
            type="text" 
            id="current_location" 
            onChange={handleRiceChange} 
            variant="outlined"
            label="Rice"
            size="small"
            value={addMenuItem.Rice || 'None'}/><br /><br />
          <TextField 
            type="text" 
            id="current_location" 
            onChange={handleLettuceChange} 
            variant="outlined"
            label="Lettuce"
            size="small"
            value={addMenuItem.Lettuce || 'None'}/><br /><br />
          <TextField 
            type="text" 
            id="current_location" 
            onChange={handleSalsaChange} 
            variant="outlined"
            label="Shell"
            size="small"
            value={addMenuItem.Shell || 'None'}/><br /><br />
          <TextField 
            type="text" 
            id="current_location" 
            onChange={handleSourCreamChange} 
            variant="outlined"
            label="Sour Cream"
            size="small"
            value={addMenuItem.SourCream || 'None'}/><br /><br />
          <TextField 
            type="text" 
            id="current_location" 
            onChange={handlePicoChange} 
            variant="outlined"
            label="Pico de Gallo"
            size="small"
            value={addMenuItem.PicodeGallo || 'None'}/><br /><br />
          <TextField 
            type="text" 
            id="current_location" 
            onChange={handleCilantroChange} 
            variant="outlined"
            label="Cilantro"
            size="small"
            value={addMenuItem.Cilantro || 'None'}/><br /><br />
          <TextField 
            type="text" 
            id="current_location" 
            onChange={handleOnionsChange} 
            variant="outlined"
            label="Diced Onions"
            size="small"
            value={addMenuItem.DicedOnions || 'None'}/><br /><br />
          <TextField 
            type="text" 
            id="current_location" 
            onChange={handleSauceChange} 
            variant="outlined"
            label="Sauce"
            size="small"
            value={addMenuItem.Sauce || 'None'}/><br /><br />
          <TextField 
            type="text" 
            id="current_location" 
            onChange={handleCornChange} 
            variant="outlined"
            label="Corn"
            size="small"
            value={addMenuItem.Corn || 'None'}/><br /><br />
          <TextField 
            type="text" 
            id="current_location" 
            onChange={handleLimeChange} 
            variant="outlined"
            label="Lime"
            size="small"
            value={addMenuItem.Lime || 'None'}/><br /><br />
          <Button 
            type="submit"
            variant="contained"
            size="large"
            color="success"
          >Finish Add Item</Button>
          <Button 
            type="button"
            onClick={event => {backToMenu(event)}}
            variant="contained"
            size="large"
            color="error"
            startIcon={<CancelPresentationIcon />}
        >Cancel Item Add</Button>
        </form>
      </div>
    )
}

export default AddMenuItem;