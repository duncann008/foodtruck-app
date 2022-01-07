const contactOwnerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_OWNER_NAME':
            return { ...state, owner_name: action.payload};
        case 'EDIT_TRUCK_NUMBER':
            return { ...state, truck_number: action.payload};
        case 'EDIT_EMAIL':
            return { ...state, email: action.payload};
        case 'EDIT_INSTAGRAM':
            return { ...state, instagram: action.payload};
        case 'EDIT_TWITTER':
            return { ...state, twitter: action.payload};
        default:
            return state;
    }
}

export default contactOwnerReducer;