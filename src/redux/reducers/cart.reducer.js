const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CART':
        let newState = [...state]
        newState.push(action.payload)
        return newState;
      default:
        return state;
    }
  };
  
 
  export default cartReducer;