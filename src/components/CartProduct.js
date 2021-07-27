import React from "react";

function CartProduct({ src, name, price, qty }) {
  return (
    <div class="row mb-3">
      <div className="col-5">
        <img class="cart-image" src={src} />
      </div>
      <div className="col-7 pl-0">
        <h6>{name}</h6>
        <div>
          <div className="d-flex">
            <label className="mb-0" style={{ marginTop: "3px" }}>
              X
            </label>
            <div className="d-flex justify-content-between ml-2">
              <button className="btn-minus btn btn-sm">-</button>
              <input
                className="input-qty"
                type="number"
                width="2px"
                value={qty}
              />
              <button className="btn-plus btn btn-sm">+</button>
            </div>
          </div>
          <div className="d-block text-right mt-3">
            <b>Rp {price}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
