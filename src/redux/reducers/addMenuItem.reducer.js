const addMenuItemReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_MENU_ITEM':
      return action.payload;
    case 'ADD_MENU_ITEM':
      return action.payload;
    case 'GET_MENU_ITEM':
      return action.payload;
    case 'ADD_ITEM':
      return {...state, item: action.payload};
    case 'ADD_IMAGE_URL':
      return {...state, image_url: action.payload};
    case 'ADD_PRICE':
      return {...state, price: action.payload};
    case 'ADD_DESCRIPTION':
      return {...state, description: action.payload};
    case 'ADD_SHELL':
      return { ...state, Shell: action.payload};
    case 'ADD_MEAT':
      return { ...state, Meat: action.payload};
    case 'ADD_BEANS':
      return { ...state, Beans: action.payload};
    case 'ADD_CHEESE':
      return { ...state, Cheese: action.payload};
    case 'ADD_RICE':
      return { ...state, Rice: action.payload};
    case 'ADD_LETTUCE':
      return { ...state, Lettuce: action.payload};
    case 'ADD_SALSA':
      return { ...state, Salsa: action.payload};
    case 'ADD_SOUR_CREAM':
      return { ...state, SourCream: action.payload};
    case 'ADD_PICO':
      return { ...state, PicodeGallo: action.payload};
    case 'ADD_CILANTRO':
      return { ...state, Cilantro: action.payload};
    case 'ADD_ONIONS':
      return { ...state, DicedOnions: action.payload};
    case 'ADD_SAUCE':
      return { ...state, Sauce: action.payload};
    case 'ADD_CORN':
      return { ...state, Corn: action.payload};
    case 'ADD_LIME':
      return { ...state, Lime: action.payload};
    case 'CLEAR_MENU_ITEM':
      return {};
    default:
      return state;
  }
};

export default addMenuItemReducer;