const menuListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MENU_LIST':
        return action.payload;
      default:
        return state;
    }
  };
  
 
  export default menuListReducer;