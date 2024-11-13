import React from 'react';
import ProductCard from '../molecules/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-md-6 col-lg-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};


export default ProductList;