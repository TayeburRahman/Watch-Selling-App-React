import React from "react";
import { Link } from "react-router-dom";
const SingleProduct = ({product}) => { 

  return (
    <div className="col-md-12 col-lg-3 mt-2">
      <div className="service p-3 border mt-5 me-4  products-card">
        <div className="service-img-container">
          <img
            className="w-100 image"
            src={product.img}
            alt=""
          />
          <div className="overlay">
            <div className="text">
              <div className="Product-view-btn">
                <Link to={`/product/${product._id}`}>View</Link>
              </div> 
            </div>
          </div>
        </div>
        <Link to={`/product/${product._id}`}>
          {" "}
          <h5 className="mt-4">{product.name}</h5>
        </Link>
        <div className="d-flex product-row">
              <p class="text-decoration-line-through">{product.oldPrice} {product.oldPrice?'€' : ''}</p>
              <p class="ms-3 me-3">{product.updatePrice} €</p>
            </div>
      </div>
    </div>
  );
};

export default SingleProduct;