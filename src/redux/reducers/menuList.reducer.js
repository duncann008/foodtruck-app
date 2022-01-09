const menuListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MENU_LIST':
        return action.payload;
      case 'GET_MENU_LIST':
        return action.payload;
      case 'EDIT_MENU_ITEM':
        return action.payload;
      case 'DELETE_FROM_MENU':
        let payload = action.payload;
        let updateState = [...state];
        const finalState = updateState.filter(newThing => payload != newThing);
        return finalState;
      case 'EDIT_ITEM':
        return {...state, item: action.payload};
      case 'EDIT_IMAGE_URL':
        return {...state, image_url: action.payload};
      case 'EDIT_PRICE':
        return {...state, price: action.payload};
      case 'EDIT_DESCRIPTION':
        return {...state, description: action.payload};
      default:
        return state;
    }
  };
  
 
  export default menuListReducer;