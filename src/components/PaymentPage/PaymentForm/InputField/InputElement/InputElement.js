import React from 'react';
import CardType from '../../../../CardType/CardType';
import Error from '../../../../Error/Error';

class InputElement extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label className="form-label">{this.props.label}</label>
                <input 
                    className={this.props.meta.error && this.props.meta.touched ? 'form-input-error' : 'form-input'} 
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    {...this.props.input}
                />
                {this.props.cardType && <CardType card={this.props.cardType}/>}
                {this.props.meta.error && this.props.meta.touched && <Error message={this.props.meta.error} />}
            </div>
        );
    }
};

export default InputElement;