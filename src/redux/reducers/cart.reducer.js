const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        let newState = [...state]
        newState.push(action.payload)
        return newState;
      case 'REMOVE_FROM_CART':
        let payload = action.payload;
        let updateState = [...state];
        const finalState = updateState.filter(newThing => payload != newThing);
        return finalState;
      case 'CLEAR_CART':
        state = [];
        return state;
      default:
        return state;
    }
  };
  
 
  export default cartReducer;