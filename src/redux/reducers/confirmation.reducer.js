const confirmationReducer = (state = {}, action) => {
  switch (action.type) {
      case 'SET_CONFIRMATION':
          return action.payload;
      default:
          return state;
  }
}

export default confirmationReducer;