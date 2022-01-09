const menuItemReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_MENU_ITEM':
        return action.payload;
      case 'GET_MENU_ITEM':
        return action.payload;
      case 'EDIT_MENU_ITEM':
        return action.payload;
      case 'EDIT_SHELL':
        return { ...state, Shell: action.payload};
      case 'EDIT_MEAT':
        return { ...state, Meat: action.payload};
      case 'EDIT_BEANS':
        return { ...state, Beans: action.payload};
      case 'EDIT_CHEESE':
        return { ...state, Cheese: action.payload};
      case 'EDIT_RICE':
        return { ...state, Rice: action.payload};
      case 'EDIT_LETTUCE':
        return { ...state, Lettuce: action.payload};
      case 'EDIT_SALSA':
        return { ...state, Salsa: action.payload};
      case 'EDIT_SOUR_CREAM':
        return { ...state, SourCream: action.payload};
      case 'EDIT_PICO':
        return { ...state, PicodeGallo: action.payload};
      case 'EDIT_CILANTRO':
        return { ...state, Cilantro: action.payload};
      case 'EDIT_ONIONS':
        return { ...state, DicedOnions: action.payload};
      case 'EDIT_SAUCE':
        return { ...state, Sauce: action.payload};
      case 'EDIT_CORN':
        return { ...state, Corn: action.payload};
      case 'EDIT_LIME':
        return { ...state, Lime: action.payload};
      case 'CLEAR_MENU_ITEM':
        return {};
      default:
        return state;
    }
  };
  
 
  export default menuItemReducer;