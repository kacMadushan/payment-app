import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reset } from 'redux-form';
import { submitPaymentDetails } from '../../actions/payments';
import { Row, Columns } from '../../grid';
import Heading from '../Heading/Heading';
import Product from '../Product/Product';
import PaymentForm from './PaymentForm/PaymentForm';
import PaymentSuccess from '../PaymentSuccess/PaymentSuccess';

class PaymentPage extends React.Component {
    static propTypes = {
        cardType: PropTypes.string,
        formName: PropTypes.string,
        payments: PropTypes.number
    }
    render() {
        let paymentsDetails = null;
        const payment = this.props.payments;
        if(!payment > 0) {
            paymentsDetails = (
                <React.Fragment>
                    <Heading title="Payments Details" />
                    <Row>
                        <Columns colSize="col-sm-12 col-md-6">
                            <Product />
                        </Columns>
                        <Columns colSize="col-sm-12  col-md-6">
                            <PaymentForm 
                                cardType={this.props.cardType}
                                onFormSubmit={(payments) => {
                                    this.props.dispatch(submitPaymentDetails(payments))
                                    this.props.dispatch(reset(this.props.formName))
                                }}
                            />
                        </Columns>
                    </Row>
                </React.Fragment>
            );
        } else {
            paymentsDetails = (
                <Row>
                    <Columns colSize="col-sm-6 offset-sm-3">
                        <PaymentSuccess />
                    </Columns>
                </Row>
            );
        }
        return (
            <Row>
                <Columns colSize="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                    <div className="payment-wrapper">
                        {paymentsDetails}
                    </div>
                </Columns>
            </Row>
        );
    }
};

export default connect()(PaymentPage);