import React from 'react';
import InputField from '../InputField/InputField';

class CardName extends React.Component {
    render() {
        return (
            <InputField 
                label="Card Holder Name"
                name="cardName"
                placeholder="CardHolder Name"
                type="text"
            />
        )
    }
}

export default CardName;