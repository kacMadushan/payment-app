// SUBMIT_PAYMENT_DETAILS
export const submitPaymentDetails = (
    { 
        cardName, 
        cardNumber, 
        securityCode, 
        expiryMonthYear, 
    } = {}) => ({
    type: 'SUBMIT_PAYMENT_DETAILS',
    payments: {
        cardName,
        cardNumber,
        securityCode,
        expiryMonthYear,
    }
});