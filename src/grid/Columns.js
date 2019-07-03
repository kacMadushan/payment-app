import React from 'react';

const Columns = (props) => {
    const { colSize } = props
    return (
        <div className={colSize}>{props.children}</div>
    );
};

export default Columns;