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

  const saveButton = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_MENU_ITEM',
      payload: PUTSTUFFHERE
  })
  }


  if (user.role === 'user')  {
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
        <label htmlFor="Quantity">Quantity:</label>
        <select name="Quantity" id="Quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={addToCart}>Add To Cart</button>
    </div>

  )}
  else 
    return (
      <div>
      <h1>{menuItem.item}</h1>
        <img src={menuItem.image_url} height="200" />
        <p>Description: {menuItem.description}</p>
        <p>Included Ingredients:</p>
        <form onSubmit={(event) => saveButton(event)}>
          <label htmlFor="Shell">Shell:</label>
          <input id="Shell" onChange defaultValue={menuItem.Shell} /><br />
          <label htmlFor="Meat">Meat:</label>
          <input id="Meat" onChange defaultValue={menuItem.Meat} /><br />
          <label htmlFor="Cheese">Cheese:</label>
          <input id="Cheese" onChange defaultValue={menuItem.Cheese} /><br />
          <button>Save</button>
        </form>
        {/* <ul>
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
        </ul> */}
      </div>
    )
}


export default MenuItemDetails;