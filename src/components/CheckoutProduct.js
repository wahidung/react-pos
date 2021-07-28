import React from "react";

function CheckoutProduct({ src, name, price, qty }) {
  return (
    <div class="row mb-3">
      <div className="col-4">
        <img class="checkout-image" src={src} />
      </div>
      <div className="col-8 pl-0">
        <h6>{name}</h6>
        <div>
          <div className="d-flex">
            <label className="mb-0" style={{ marginTop: "3px" }}>
              X {qty}
            </label>
          </div>
          <div className="d-block text-right mt-3">
            <b>Rp {price}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
