import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react'
import { TextField } from '@material-ui/core';
import { InputAdornment } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './AddMenuItem.css';


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
          onChange={handleItemChange} 
          variant="outlined"
          label="Item Name"
          size="small"
          defaultValue={addMenuItem.item || ''}/><br />
          
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
            defaultValue={addMenuItem.image_url || ''}/><br /><br />
          <TextField 
            style={{width: 300}}
            size="large"
            multiline
            type="text" 
            onChange={handleDescriptionChange}
            maxRows={8}
            variant="outlined"
            label="Item Description"
            defaultValue={addMenuItem.description || ''}/><br /><br />
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
            defaultValue={addMenuItem.price || ''}/><br /><br />
          <h3>Ingredients:</h3>
          <p>By default, a blank input will prevent an ingredient from being included.</p>
          <TextField 
            type="text"  
            onChange={handleShellChange} 
            variant="outlined"
            label="Shell"
            size="small"
            defaultValue={addMenuItem.Shell || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleMeatChange} 
            variant="outlined"
            label="Meat"
            size="small"
            defaultValue={addMenuItem.Meat || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleBeansChange} 
            variant="outlined"
            label="Beans"
            size="small"
            defaultValue={addMenuItem.Beans || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleCheeseChange} 
            variant="outlined"
            label="Cheese"
            size="small"
            defaultValue={addMenuItem.Cheese || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleRiceChange} 
            variant="outlined"
            label="Rice"
            size="small"
            defaultValue={addMenuItem.Rice || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleLettuceChange} 
            variant="outlined"
            label="Lettuce"
            size="small"
            defaultValue={addMenuItem.Lettuce || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleSalsaChange} 
            variant="outlined"
            label="Salsa"
            size="small"
            defaultValue={addMenuItem.Salsa || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleSourCreamChange} 
            variant="outlined"
            label="Sour Cream"
            size="small"
            defaultValue={addMenuItem.SourCream || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handlePicoChange} 
            variant="outlined"
            label="Pico de Gallo"
            size="small"
            defaultValue={addMenuItem.PicodeGallo || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleCilantroChange} 
            variant="outlined"
            label="Cilantro"
            size="small"
            defaultValue={addMenuItem.Cilantro || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleOnionsChange} 
            variant="outlined"
            label="Diced Onions"
            size="small"
            defaultValue={addMenuItem.DicedOnions || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleSauceChange} 
            variant="outlined"
            label="Sauce"
            size="small"
            defaultValue={addMenuItem.Sauce || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleCornChange} 
            variant="outlined"
            label="Corn"
            size="small"
            defaultValue={addMenuItem.Corn || ''}/><br /><br />
          <TextField 
            type="text"  
            onChange={handleLimeChange} 
            variant="outlined"
            label="Lime"
            size="small"
            defaultValue={addMenuItem.Lime || ''}/><br /><br />
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