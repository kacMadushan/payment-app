import React from 'react';

const Error = ({ message }) => (
    <React.Fragment>
        <p className="error-message">{message}</p>
    </React.Fragment>
);

export default Error;