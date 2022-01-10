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
      <div key={item.id}>
        <h3>{item.item}</h3>
        <img
            src={item.image_url} 
            alt={item.item}
            height="300"
            />
        <p>{item.description}</p>
        <p>${item.price}</p>
      </div>
      <button onClick={goToMenuItemDetails}>Edit Item</button>
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