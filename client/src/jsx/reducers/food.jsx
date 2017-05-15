export const food_detail = (state = {}, action) => {
    switch (action.type) {
        case 'FOOD_DETAIL':
            return action.food;
        default:
            return state;
    }
}