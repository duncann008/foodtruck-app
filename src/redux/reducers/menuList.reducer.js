const menuListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MENU_LIST':
        console.log(action.payload);
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default menuListReducer;