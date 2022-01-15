const favoritesReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_FAVORITES':
        return action.payload;
      case 'GET_FAVORITES':
        return [...action.payload];
      case 'DELETE_FAVORITE':
        let orderArray = state.filter(thing => thing.order_id != action.payload);
        return orderArray;
      default:
        return state;
      
  }
}

export default favoritesReducer;