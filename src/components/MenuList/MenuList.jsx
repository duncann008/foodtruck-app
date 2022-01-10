import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import MenuItem from '../MenuItem/MenuItem';

function MenuList() {

    const dispatch = useDispatch();
    const menuList = useSelector(store => store.menuListReducer);
    const history = useHistory();
    const user = useSelector(store => store.user)
    
    useEffect(() => {
        dispatch({ type: 'FETCH_MENU_LIST' });
        dispatch({type: 'CLEAR_MENU_ITEM' });
    }, []);
    
    

    return (
        <div>
          {menuList.map(item => {
            return (
              <MenuItem key={item.id} item={item} />
                );
              })}
        <br />
        <button>Add Item</button>
        </div>
    )
}

export default MenuList;