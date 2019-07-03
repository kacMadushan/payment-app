import jQuery from 'jquery';
// Card data formats

// Credit card number format
export const creditCardNumberFormat = (value = '') => jQuery.payment.formatCardNumber(value);

// Expiry month and year format
export const expiryMonthYearFormat = (value = '') => jQuery.payment.formatExpiry(value);

// Secuity code format
export const secuityCodeFormat = (value = '') => value.slice(0, 4);