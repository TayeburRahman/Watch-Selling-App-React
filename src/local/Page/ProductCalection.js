import Footer from 'local/Sheard/Footer';
import React from 'react';
import Products from '../Product/Products';
import ShopByCategories from '../Product/ShopByCategories/ShopByCategories';
import CustomHeader from '../Sheard/Costomheader';

const ProductCalection = () => {
    return (
        <>
         <CustomHeader></CustomHeader>
            <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-12">
                    <ShopByCategories></ShopByCategories>
                </div>
                <div className="col-md-9 col-lg-9 col-sm-12">
                    <Products></Products>
                </div> 
            </div>
            <Footer></Footer>
        </>
    );
};

export default ProductCalection;