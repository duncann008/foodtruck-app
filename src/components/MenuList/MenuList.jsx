import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';
import './MenuList.css'; 
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function MenuList() {

    const dispatch = useDispatch();
    const menuList = useSelector(store => store.menuListReducer);
    const history = useHistory();
    const user = useSelector(store => store.user)
    
    useEffect(() => {
        dispatch({ type: 'FETCH_MENU_LIST' });
        dispatch({type: 'CLEAR_MENU_ITEM' });
    }, []);

    const routeToAddMenuItem = (event) =>  {
      event.preventDefault();
      history.push('/addMenuItem')
    }
    
    
  if (user.role === 'admin')  {
    return (
        <div className="menuDiv">
          {menuList.map(item => {
            return (
              <MenuItem key={item.id} item={item} />
                );
              })}
        <br />
        <Button 
          onClick={event => {routeToAddMenuItem(event)}}
          variant="contained"
          size="large"
          color="success"
          startIcon={<AddIcon />}
        >Add Item</Button>
        </div>
    )
  }
  else  {
    return  (
      <div className="menuDiv">
          {menuList.map(item => {
            return (
              <MenuItem key={item.id} item={item} />
                );
              })}
        <br />
        </div>
    )
  }
}

export default MenuList;