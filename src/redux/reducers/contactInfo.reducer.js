const contactInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CONTACT_INFO':
            return action.payload;
        case 'GET_CONTACT_INFO':
            return {...action.payload};
        case 'EDIT_FIRST_NAME':
            return { ...state, first_name: action.payload};
        case 'EDIT_LAST_NAME':
            return { ...state, last_name: action.payload};
        case 'EDIT_PHONE_NUMBER':
            return { ...state, phone_number: action.payload};
        case 'EDIT_USER_EMAIL':
            return { ...state, email: action.payload};
        default:
            return state;
    }
}

export default contactInfoReducer;