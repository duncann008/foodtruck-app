const aboutUsReducer = (state = '', action) => {
    switch (action.type) {
        case 'EDIT_ABOUT_US':
            return action.payload;
        default:
            return state;
    }
}

export default aboutUsReducer;