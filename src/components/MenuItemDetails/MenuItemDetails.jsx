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

  const ingredients = (ingredient) => {
    switch (ingredient) {
      case 'None':
        return false;
      default:
        return true;
    }
  };

  console.log(ingredients(menuItem.Sauce));

  return (

    <div>
        <h1>{menuItem.item}</h1>
        <img src={menuItem.image_url} height="200" />
        <p>Included Ingredients:</p>
        <ul>
            {ingredients(menuItem.Shell) ? <li>Shell: {menuItem.Shell}</li> : ''}
            {ingredients(menuItem.Meat) ? <li>Meat: {menuItem.Meat}</li> : ''}
            {ingredients(menuItem.Cheese) ? <li>Cheese: {menuItem.Cheese}</li> : ''}
            {ingredients(menuItem.Beans) ? <li>Beans: {menuItem.Beans}</li> : ''}
            {ingredients(menuItem.Rice) ? <li>Rice: {menuItem.Rice}</li> : ''}
            {ingredients(menuItem.Lettuce) ? <li>Lettuce: {menuItem.Lettuce}</li> : ''}
            {ingredients(menuItem.Salsa) ? <li>Salsa: {menuItem.Salsa}</li> : ''}
            {ingredients(menuItem.SourCream) ? <li>Sour Cream: {menuItem.SourCream}</li> : ''}
            {ingredients(menuItem.PicodeGallo) ? <li>Pico de Gallo: {menuItem.PicodeGallo}</li> : ''}
            {ingredients(menuItem.Cilantro) ? <li>Cilantro: {menuItem.Cilantro}</li> : ''}
            {ingredients(menuItem.DicedOnions) ? <li>Diced Onions: {menuItem.DicedOnions}</li> : ''}
            {ingredients(menuItem.Sauce) ? <li>Sauce: {menuItem.Sauce}</li> : ''}
            {ingredients(menuItem.Lime) ? <li>Lime: {menuItem.Lime}</li> : ''}
        </ul>
    </div>

  )
}


export default MenuItemDetails;