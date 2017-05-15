export function selectLanguage(lang){
    return {
        type: 'SELECT_LANG',
        lang
    }
}

export function viewFoodDetail(food){
    return {
        type: 'FOOD_DETAIL',
        food
    }
}