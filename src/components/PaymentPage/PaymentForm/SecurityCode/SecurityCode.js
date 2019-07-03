import React from 'react';
import { secuityCodeFormat } from '../../../../formats/formats';
import InputField from '../InputField/InputField';

class SecurityCode extends React.Component {
    render() {
        return (
            <InputField 
                label="CVV"
                name="securityCode"
                placeholder="CVV"
                format={secuityCodeFormat}
                type="text"
            />
        );
    }
};

export default SecurityCode;