import React from 'react';
import { expiryMonthYearFormat } from '../../../../formats/formats';
import InputField from '../InputField/InputField';

class ExpiryDate extends React.Component {
    render() {
        return (
            <InputField 
                label="Expiry Date"
                name="expiryMonthYear"
                placeholder="MM / YY"
                format={expiryMonthYearFormat}
                type="text"
            />
        );
    }
};

export default ExpiryDate;