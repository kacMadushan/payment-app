import jQuery from 'jquery';
// Payment Details validation

// Validation card holder name
const checkCardName = (values) => {
    const errors = {}
    if(!values || !values.cardName) {
        errors.cardName = 'Card holder name required'
    } else if(values.cardName.split(' ').length < 2) {
        errors.cardName = 'Full name required'
    }
    return errors;
}

// Validation card number
const checkCardNumber = (values) => {
    const errors = {}
    if(!values || !values.cardNumber) {
        errors.cardNumber = 'Card number required'
    } else if(!jQuery.payment.validateCardNumber(values.cardNumber)) {
        errors.cardNumber = 'Valid card number required'
    }
    return errors;
};

// Validation security code (cvv number)
const checkSecurityCode = (values) => {
    const errors = {}
    if(!values || !values.securityCode) {
        errors.securityCode = 'Security code required'
    } else if(!values || !values.cardNumber) {
        errors.securityCode = 'Card number required'
    } else {
        const cardType = jQuery.payment.cardType(values.cardNumber);
        if(!jQuery.payment.validateCardCVC(values.securityCode, cardType)) {
            errors.securityCode = 'Invalid Security code'
        }
    }
    return errors;
};

// Validation expiry date - (mm/yy)
const checkExpiryMonthYear = (values) => {
    const errors = {}
    if(!values || !values.expiryMonthYear) {
        errors.expiryMonthYear = 'Expiry date required'
    } else {
        const [month, year] = values.expiryMonthYear.match(/\d+/g) || [];
        if(!year) {
            errors.expiryMonthYear = 'Expiry year required'
        } else if(!jQuery.payment.validateCardExpiry(month, year)) {
            errors.expiryMonthYear = 'Invalid expiry date'
        }
    }
    return errors;
};

// Validation expiry year
const checkExpiryYear = (values) => {
    const errors = {}
    if(!values || !values.expiryYear) {
        errors.expiryYear = 'Expiry year required'
    }
}

// Return payment details validation
export const paymentDetailsValidation = (values) => {
    return {
        ...checkCardName(values),
        ...checkCardNumber(values),
        ...checkExpiryMonthYear(values),
        ...checkExpiryYear(values),
        ...checkSecurityCode(values)
    }
};