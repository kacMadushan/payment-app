// Filters Reducer
const filtersReducerDefaultState = {
    cardType: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CARD_TYPE':
            return {
                ...state,
                cardType: action.cardType
            };
        default:
            return state;
    }
};