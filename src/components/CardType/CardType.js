import React from 'react';

const CardType = ({ card }) => (
    <div className="card-type">
        <img className="card-image" src={`/images/card/${card}.png`} alt={card} />
    </div>
);

export default CardType;