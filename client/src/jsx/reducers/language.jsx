export const language = (state = 'vi', action) => {
    switch (action.type) {
        case 'SELECT_LANG':
            return action.lang;
        default:
            return state;
    }
}
