const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_CART':
        console.log([...state])
        return [...state];
      case 'ADD_TO_CART':
        let newState = [...state]
        newState.push(action.payload)
        return newState;
      case 'EDIT_CART_QUANTITY':
        let quantityPayload = action.payload;
        let updateQuantityState = [...state];
      //   // const finalQuantityState = updateQuantityState.filter(newThing => payload != newThing);
      //   // return finalQuantityState;
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