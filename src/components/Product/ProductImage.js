import React from 'react';

const ProductImage = ({ productImg, productName }) => <img className="product-img" src={productImg} alt={productName} />;

export default ProductImage;