const favoritesReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_FAVORITES':
        return action.payload;
      case 'GET_FAVORITES':
        return action.payload;
      case 'FETCH_FAVORITES':
        return action.payload;
      case 'DELETE_FAVORITE':
        let payload = action.payload;
        let updateState = [...state];
        const finalState = updateState.filter(newThing => payload != newThing);
        return finalState;
      default:
        return state;
      
  }
}

export default favoritesReducer;