import React from 'react';
import { connect } from 'react-redux';
import jQuery from 'jquery';
import { setCardType } from '../../../../actions/filters';
import { creditCardNumberFormat } from '../../../../formats/formats';
import InputField from '../InputField/InputField';

class CardNumber extends React.Component {
    render() {
        return (
            <InputField 
                label="Card Number"
                name="cardNumber"
                placeholder="Card Number"
                format={creditCardNumberFormat}
                type="text"
                cardType={this.props.cardType}
                onChange={(e) => {
                    this.props.dispatch(setCardType(jQuery.payment.cardType(e.target.value)))
                }}
            />
        );
    }
};

export default connect()(CardNumber);