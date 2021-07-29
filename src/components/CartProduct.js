import React from "react";
import NumberFormat from "react-number-format";

function CartProduct({ src, name, price, qty, data, updateQtyCart }) {
  return (
    <div className="row mb-3">
      <div className="col-5">
        <img className="cart-image" src={src} alt="" />
      </div>
      <div className="col-7 pl-0">
        <h6>{name}</h6>
        <div>
          <div className="d-flex">
            <label className="mb-0" style={{ marginTop: "3px" }}>
              X
            </label>
            <div className="d-flex justify-content-between ml-2">
              <button
                className="btn-minus btn btn-sm"
                onClick={(e) => updateQtyCart(data, qty - 1)}
              >
                -
              </button>
              <input
                className="input-qty"
                type="text"
                width="2px"
                value={qty}
                onChange={(e) => updateQtyCart(data, e.target.value)}
              />
              <button
                className="btn-plus btn btn-sm"
                onClick={(e) => updateQtyCart(data, qty + 1)}
              >
                +
              </button>
            </div>
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

export default CartProduct;
