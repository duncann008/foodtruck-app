const contactOwnerReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_OWNER_CONTACT':
            return action.payload;
        default:
            return state;
    }
}

export default contactOwnerReducer;