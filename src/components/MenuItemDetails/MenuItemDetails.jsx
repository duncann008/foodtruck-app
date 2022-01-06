import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function MenuItemDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const cartReducer = useSelector(store => store.cartReducer);
  const user = useSelector((store) => store.user);

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

  const addToCart = () => {
    menuItem.user_id = user.id;
    dispatch({
      type: 'ADD_TO_CART',
      payload: menuItem
    })
  }

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
        <label for="Quantity">Quantity:</label>
        <select name="Quantity" id="Quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={addToCart}>Add To Cart</button>
    </div>

  )
}


export default MenuItemDetails;