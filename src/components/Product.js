import React from "react";
import NumberFormat from "react-number-format";

function Product({ url, name, description, price }) {
  return (
    <div className="card product mb-4">
      <img className="card-img-top img-fluid" src={url} alt="" />
      <div className="card-block pt-2">
        <h3 className="product-name">{name}</h3>
        <div className="d-flex justify-content-between">
          <small className="product-description">{description}</small>
          <h4 className="product-price">
            <NumberFormat
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rp "}
            />
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Product;
