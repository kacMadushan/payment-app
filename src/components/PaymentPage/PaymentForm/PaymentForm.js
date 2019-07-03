import React from 'react';
import { reduxForm } from 'redux-form';
import { paymentDetailsValidation } from '../../../validations/validations';
import { Row, Columns } from '../../../grid';
import CardName from './CardName/CardName';
import CardNumber from './CardNumber/CardNumber';
import ExpiryDate from './ExpiryDate/ExpiryDate';
import SecurityCode from './SecurityCode/SecurityCode';

class PaymentForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
                    <CardName />
                    <CardNumber cardType={this.props.cardType} />
                    <Row>
                        <Columns colSize="col-sm-6">
                            <ExpiryDate />
                        </Columns>
                        <Columns colSize="col-sm-6">
                            <SecurityCode />
                        </Columns>
                    </Row>
                    <button 
                        type="submit" 
                        className="btn button-pay btn-block"
                        disabled={this.props.submitting}
                    >
                        Pay Now
                    </button>
                </form>
            </div>
        )
    }
}

export default PaymentForm = reduxForm({
    form: 'payment',
    validate: paymentDetailsValidation
})(PaymentForm);