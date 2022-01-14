import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './MenuItem.css';

function MenuItem({item}) {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const Swal = require('sweetalert2');

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
      Swal.fire({
        title: `Do you want to delete "${item.item}" from the menu?`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Delete "${item.item}"`,
        denyButtonText: 'Cancel',
        icon: 'warning',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
          denyButton: 'order-3',
        }
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch({
            type: 'DELETE_FROM_MENU',
            payload: item
        })
          Swal.fire(`Deleted: ${item.item}!`, '', 'success')
        } else if (result.isDenied) {
          
        }
      })
    }
         
  
  
 
  if (user.role === 'admin')  {
    return (
      <div className="menuItem">
        
      <div key={item.id}>
        <h3>{item.item}</h3>
        <img className='foodImage'
            src={item.image_url} 
            alt={item.item}
            height="300"
            />
        <p>{item.description}</p>
        <p>${item.price}</p>
      </div>
      <Button 
        onClick={goToMenuItemDetails}
        startIcon={<EditIcon />}
        style={{color: "blue" }}
        className="editButton"
      >Edit Item</Button>
      <Button 
        onClick={deleteFromMenu}
        startIcon={<DeleteIcon />}
        style={{color: "red"}}
        className="deleteButton"
      >Delete Item</Button>
    </div>
    )
    }
else if (user.role === 'user')  {
    return (
        <div className="menuItem" onClick={goToMenuItemDetails} key={item.id}>
        <p className="clickDetails">Click Anywhere for Details</p>
        <h3>{item.item}</h3>
        <img
            className='foodImage'
            src={item.image_url} 
            alt={item.item}
            height="300"
            />
        <p>{item.description}</p>
        <p>${item.price}</p>
      </div>
      )
}
else  {
  return  (
    <div className="menuItem" onClick={goToMenuItemDetails} key={item.id}>
    <h3>{item.item}</h3>
    <img
        className='foodImage'
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