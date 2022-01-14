import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import red from '@material-ui/core/colors/red';

function LogOutButton(props) {
  const dispatch = useDispatch();
  const cartReducer = useSelector(store => store.cartReducer);
  const history = useHistory();
  const Swal = require('sweetalert2');

  const logOut = () =>  {
    Swal.fire({
      title: `Do you want to log out?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Log Out`,
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
        dispatch({ type: 'LOGOUT' });
        history.push('/home');
      } else if (result.isDenied) {
        
      }
    })
    
    // dispatch({ type: 'CLEAR_CART'})
  }
  
  return (
    <Button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      style={{ color: "red" }}
      variant="outlined"
      endIcon={<LogoutIcon />}
      onClick={logOut}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;
