import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import InputElement from './InputElement/InputElement';

class InputField extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        format: PropTypes.func,
        type: PropTypes.string.isRequired,
        cardType: PropTypes.string,
        onChange: PropTypes.func
    }
    render() {
        return (
            <Field 
                label={this.props.label}
                name={this.props.name}
                placeholder={this.props.placeholder}
                component={InputElement}
                format={this.props.format}
                type={this.props.type}
                cardType={this.props.cardType}
                onChange={this.props.onChange}
            />
        )
    }
}

export default InputField;