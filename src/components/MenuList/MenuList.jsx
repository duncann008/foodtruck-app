import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function MenuList() {

    const dispatch = useDispatch();
    const menuList = useSelector(store => store.menuListReducer);
    const history = useHistory();
    
    useEffect(() => {
        dispatch({ type: 'FETCH_MENU_LIST' });
        
    }, []);
    console.log(menuList);
    
    const routeToItem = (id) => {
        dispatch({
            type: 'FETCH_MENU_ITEM',
            payload:id
        });
    }

    return (
        <div>
            {menuList.map(item => {
                    return (
                        <div key={item.id}>
                            <h3>{item.item}</h3>
                            <img
                                src={item.image_url} 
                                alt={item.item}
                                />
                            <p>{item.price}</p>
                        </div>
                    );
                })}
        </div>
    )
}

export default MenuList;