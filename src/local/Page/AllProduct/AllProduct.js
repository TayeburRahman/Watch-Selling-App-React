import React from 'react';
import Products from '../../Product/Products';
import Costomheader from '../../Sheard/Costomheader';
import Footer from '../../Sheard/Footer';

const AllProduct = () => {
    return (
        <div>
            <Costomheader></Costomheader>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default AllProduct;