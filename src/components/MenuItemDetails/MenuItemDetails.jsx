import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function MenuItemDetails() {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch({
      type: 'FETCH_MENU_ITEM',
      payload: params.id
    })
  }, [params.id])

  const menuItem = useSelector(store => store.menuItemReducer)

  return (

    <div>
        <h1>{menuItem.item}</h1>
        <img src={menuItem.image_url} height="200" />
        <ul>
            <li>Shell: {menuItem.Shell}</li>
            <li>Meat: {menuItem.Meat}</li>
            <li>Cheese: {menuItem.Cheese}</li>
            <li>Beans: {menuItem.Beans}</li>
            <li>Rice: {menuItem.Rice}</li>
            <li>Lettuce: {menuItem.Lettuce}</li>
            <li>Salsa: {menuItem.Salsa}</li>
            <li>Sour Cream: {menuItem.SourCream}</li>
            <li>Pico de Gallo: {menuItem.PicodeGallo}</li>
            <li>Cilantro: {menuItem.Cilantro}</li>
            <li>Diced Onions: {menuItem.DicedOnions}</li>
            <li>Sauce: {menuItem.Sauce}</li>
            <li>Lime: {menuItem.Lime}</li>
        </ul>
    </div>

  )
}


export default MenuItemDetails;