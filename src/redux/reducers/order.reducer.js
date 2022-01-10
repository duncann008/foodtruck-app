const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ORDER':
            return action.payload;
        case 'GET_ORDER':
            return action.payload;
        case 'SET_NOTES':
            return { ...state, notes: action.payload};
        case 'SET_TIME':
            return { ...state, time_of_order: action.payload};
        case 'SET_TOTAL_PRICE':
            return { ...state, total_price: action.payload};
        default:
            return state;
    }
}

export default orderReducer;