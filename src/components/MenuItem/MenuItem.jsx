import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function MenuItem({item}) {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const goToMenuItemDetails = () => {
        if (user.id) {
            history.push(`/menuItem/${item.id}`);
        }
        else  {
            return;
        }
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

    const saveButton = (event) => {
      event.preventDefault();
      dispatch({
        type: 'EDIT_MENU_LIST',
        payload: item
      })
    }

    const deleteFromMenu = (event) =>    {
      
      event.preventDefault();
      dispatch({
          type: 'DELETE_FROM_MENU',
          payload: item
      })
  }
  
 
  if (user.role === 'admin')  {
    return (
      <div>
      <label htmlFor="Item">Name:</label>
      <input id="Item" onChange={handleItemChange} defaultValue={item.item || ''} /><br />
      <img
          src={item.image_url} 
          alt={item.item}
          height="300"
          />
      <br />
      <label htmlFor="ImageURL">Image URL:</label>
      <input id="ImageURL" onChange={handleImageUrlChange} defaultValue={item.image_url || ''} /><br />
      <label hmtlFor="Description">Description:</label>
      <textarea id="Description" onChange={handleDescriptionChange} value={item.description || ''} /><br />
      <label htmlFor="Price">Price: $</label>
      <input id="Price" onChange={handlePriceChange} defaultValue={item.price || ''} /><br />
      <button onClick={saveButton}>Save Changes</button>
      <button onClick={goToMenuItemDetails}>Edit Ingredients</button>
      <button onClick={deleteFromMenu}>Delete Item</button>
    </div>
    )
    }
else   {
    return (
        <div onClick={goToMenuItemDetails} key={item.id}>
        <h3>{item.item}</h3>
        <img
            src={item.image_url} 
            alt={item.item}
            height="300"
            />
        <p>{item.description}</p>
        <p>${item.price}</p>
      </div>
      )
}
}
    
export default MenuItem;