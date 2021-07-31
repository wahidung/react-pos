import React from "react";
import NumberFormat from "react-number-format";

function CheckoutProduct({ src, name, price, qty }) {
  return (
    <div class="row mb-3">
      <div className="col-4">
        <img class="checkout-image" src={src} alt="" />
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
            <b>
              <NumberFormat
                value={price * qty}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rp "}
              />
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
