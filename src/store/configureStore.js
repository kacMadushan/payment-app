import { createStore, combineReducers } from 'redux';
import { reducer as paymentFormReducer } from 'redux-form';
import paymentsReducer from '../reducers/payments';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            payments: paymentsReducer,
            filters: filtersReducer,
            form: paymentFormReducer
        }),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
};