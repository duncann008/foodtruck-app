import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react'


function AddMenuItem() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const menuListReducer = useSelector(store => store.menuListReducer);
  

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

  const backToMenu = () =>  {
    history.push('/menu');
}


    return (
      <div>
        <p>Included Ingredients:</p>
        <form onSubmit={(event) => addItemButton(event)}>
          <label htmlFor="Item">Name:</label>
          <input id="Item" onChange={handleItemChange} defaultValue={addMenuItem.item || ''} /><br />
          
            <img
                src={addMenuItem.image_url} 
                alt={addMenuItem.item}
                height="300"
                />
          <br />
          <label htmlFor="ImageURL">Image URL:</label>
          <input id="ImageURL" onChange={handleImageUrlChange} defaultValue={addMenuItem.image_url || ''} /><br />
          <label hmtlFor="Description">Description:</label>
          <textarea id="Description" onChange={handleDescriptionChange} value={addMenuItem.description || ''} /><br />
          <label htmlFor="Price">Price: $</label>
          <input id="Price" onChange={handlePriceChange} defaultValue={addMenuItem.price || ''} /><br />
          <label htmlFor="Shell">Shell:</label>
          <input id="Shell" onChange={handleShellChange} defaultValue={addMenuItem.Shell} /><br />
          <label htmlFor="Meat">Meat:</label>
          <input id="Meat" onChange={handleMeatChange} defaultValue={addMenuItem.Meat} /><br />
          <label htmlFor="Beans">Beans:</label>
          <input id="Beans" onChange={handleBeansChange} defaultValue={addMenuItem.Beans} /><br />
          <label htmlFor="Cheese">Cheese:</label>
          <input id="Cheese" onChange={handleCheeseChange} defaultValue={addMenuItem.Cheese} /><br />
          <label htmlFor="Rice">Rice:</label>
          <input id="Rice" onChange={handleRiceChange} defaultValue={addMenuItem.Rice} /><br />
          <label htmlFor="Lettuce">Lettuce:</label>
          <input id="Lettuce" onChange={handleLettuceChange} defaultValue={addMenuItem.Lettuce} /><br />
          <label htmlFor="Salsa">Salsa:</label>
          <input id="Salsa" onChange={handleSalsaChange} defaultValue={addMenuItem.Salsa} /><br />
          <label htmlFor="SourCream">Sour Cream:</label>
          <input id="SourCream" onChange={handleSourCreamChange} defaultValue={addMenuItem.SourCream} /><br />
          <label htmlFor="Pico">Pico de Gallo:</label>
          <input id="Pico" onChange={handlePicoChange} defaultValue={addMenuItem.PicodeGallo} /><br />
          <label htmlFor="Cilantro">Cilantro:</label>
          <input id="Cilantro" onChange={handleCilantroChange} defaultValue={addMenuItem.Cilantro} /><br />
          <label htmlFor="DicedOnions">Diced Onions:</label>
          <input id="DicedOnions" onChange={handleOnionsChange} defaultValue={addMenuItem.DicedOnions} /><br />
          <label htmlFor="Sauce">Sauce:</label>
          <input id="Sauce" onChange={handleSauceChange} defaultValue={addMenuItem.Sauce} /><br />
          <label htmlFor="Corn">Corn:</label>
          <input id="Corn" onChange={handleCornChange} defaultValue={addMenuItem.Corn} /><br />
          <label htmlFor="Lime">Lime:</label>
          <input id="Lime" onChange={handleLimeChange} defaultValue={addMenuItem.Lime} /><br />
          <button type="submit">Add To Menu</button><button type="button" onClick={backToMenu}>Back To Menu</button>
        </form>
      </div>
    )
}

export default AddMenuItem;