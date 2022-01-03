import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import MenuItem from '../MenuItem/MenuItem';

function MenuList() {

    const dispatch = useDispatch();
    const menuList = useSelector(store => store.menuListReducer);
    const history = useHistory();
    
    useEffect(() => {
        dispatch({ type: 'FETCH_MENU_LIST' });
        
    }, []);
    
    
    

    return (
        <div>
            {menuList.map(item => {
                    return (
                        <MenuItem key={item.id} item={item} />
                    );
                })}
        </div>
    )
}

export default MenuList;