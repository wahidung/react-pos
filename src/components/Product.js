import React from "react";

function Product({ src, name, description, price }) {
  return (
    <div className="col-4">
      <div className="card product mb-4">
        <img
          alt="Card image cap"
          className="card-img-top img-fluid"
          src={src}
        />
        <div className="card-block pt-2">
          <h3 className="product-name">{name}</h3>
          <div className="d-flex justify-content-between">
            <small className="product-description">{description}</small>
            <h4 className="product-price">Rp {price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
