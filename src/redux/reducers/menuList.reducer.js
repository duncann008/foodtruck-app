const menuListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MENU_LIST':
        return action.payload;
      case 'GET_MENU_LIST':
        return action.payload;
      case 'DELETE_FROM_MENU':
        let payload = action.payload;
        let updateState = [...state];
        const finalState = updateState.filter(newThing => payload != newThing);
        return finalState;
      default:
        return state;
    }
  };
  
 
  export default menuListReducer;