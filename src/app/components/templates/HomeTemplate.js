import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import ProductList from '../organisms/ProductList';
import { products } from '../../data/productsData';
import { categories } from '../../data/categoriesData';
import Sidebar from '../organisms/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="row">
          {/* Sidebar a la izquierda */}
          <div className="col-lg-3 col-md-4 mb-4">
            <Sidebar categories={categories} />
          </div>

          {/* Product List a la derecha */}
          <div className="col-lg-9 col-md-8">
            <ProductList products={products} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeTemplate;