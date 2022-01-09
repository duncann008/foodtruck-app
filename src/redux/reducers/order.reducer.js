const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ORDER':
            return action.payload;
        case 'SET_NOTES':
            return { ...state, notes: action.payload};
        case 'SET_MENU_ID':
            return { ...state, menu_id: action.payload};
        case 'SET_ORDER_ID':
            return { ...state, order_id: action.payload};
        case 'SET_QUANTITY':
            return { ...state, quantity: action.payload};
        default:
            return state;
    }
}

export default orderReducer;