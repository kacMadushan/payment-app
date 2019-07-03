// Payments Reducer
const paymentsReducerDefaultState = [];

export default (state = paymentsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SUBMIT_PAYMENT_DETAILS':
            return [
                ...state,
                action.payments
            ]
        default:
            return state;
    }
};