const aboutContactReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ABOUT_CONTACT':
            return action.payload;
        case 'EDIT_IMAGE_URL':
            return { ...state, image_url: action.payload};
        case 'EDIT_ABOUT_US':
            return { ...state, about_us: action.payload};
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
        case 'EDIT_CURRENT_LOCATION':
            return {...state, current_location: action.payload};
        case 'EDIT_NEXT_LOCATION':
            return {...state, next_location: action.payload};
        case 'EDIT_SCHEDULE':
            return {...state, schedule: action.payload};
        default:
            return state;
    }
}

export default aboutContactReducer;