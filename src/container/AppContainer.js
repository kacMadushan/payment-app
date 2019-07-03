import React from 'react';
import { connect } from 'react-redux';
import PaymentPage from '../components/PaymentPage/PaymentPage';

const AppContainer = (props) => {
    const { cardType } = props.filters;
    const payments = props.payments.length;
    return (
        <div className="container">
            <PaymentPage 
                cardType={cardType}
                formName="payment"
                payments={payments}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        payments: state.payments
    }
}

export default connect(mapStateToProps)(AppContainer);