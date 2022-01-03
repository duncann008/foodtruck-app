const menuItemReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_MENU_ITEM':
        return action.payload;
      case 'CLEAR_MENU_ITEM':
        return {};
      default:
        return state;
    }
  };
  
 
  export default menuItemReducer;