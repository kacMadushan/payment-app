import React from 'react';
import { productImg } from '../../path/path';
import ProductImage from './ProductImage';

const Product = (props) => (
    <div className="product">
        <ProductImage 
            productImg={productImg} 
            productName="iMac Retina 5K" 
        />
        <div className="product-details">
            <h4 className="product-name">iMac Retina 5K</h4>
        </div>
    </div>
);

export default Product;