import React, { useEffect, useState } from "react";
import CheckoutProduct from "../components/CheckoutProduct";
import { useRecoilState } from "recoil";
import { cartState } from "../store/index";
import NumberFormat from "react-number-format";

function Checkout() {
  const [payment, setPayment] = useState("CASH");
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [listCart, setListCart] = useRecoilState(cartState);
  const [fee, setFee] = useState(0);

  useEffect(() => {
    const sum = listCart.map((cart) => cart.price * cart.qty);
    setSubTotal(sum.reduce((acc, sum) => acc + sum));
  }, []);

  useEffect(() => {
    let theFee = 0;
    switch (payment) {
      case "CASH":
        theFee = 0;
        break;
      case "BANK":
        theFee = 3000;
        break;
      case "CC":
        theFee = 6000;
        break;
      default:
        theFee = 0;
        break;
    }

    setFee(theFee);
    setTotal(subTotal + theFee);
  }, [payment]);

  return (
    <div className="bg-header" style={{ minHeight: "100vh" }}>
      <div className="row mr-0 ml-0">
        <div className="col-12 text-center p-4">
          <img src="assets/images/logo.png" alt="Logo" width="150" />
        </div>
      </div>
      <div className="container checkout">
        <div className="card checkout-card">
          <div className="row p-5">
            <div className="col-6 pr-4 col-product">
              <h5 className="mb-4">Pesanan Saya</h5>
              <div>
                {listCart.map((cart) => (
                  <CheckoutProduct
                    key={cart.id}
                    src={cart.picture}
                    name={cart.name}
                    price={cart.price}
                    qty={cart.qty}
                  />
                ))}
              </div>
              <div className="border-top pt-3 mt-4 d-flex justify-content-between checkout-subtotal">
                <h6 className="">SubTotal</h6>
                <h6 className="font-weight-bold">
                  <NumberFormat
                    value={subTotal}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rp "}
                  />
                </h6>
              </div>
            </div>
            <div className="col-6">
              <h5 className="mb-4">Metode Pembayaran</h5>
              <div className="row">
                <div className="col-4 pr-0">
                  <button
                    className={
                      payment === "CASH"
                        ? "btn btn-payment active"
                        : "btn btn-payment"
                    }
                    onClick={() => setPayment("CASH")}
                  >
                    <img src="assets/images/cash.png" width="70" alt="" />
                  </button>
                </div>
                <div className="col-4 pr-0">
                  <button
                    className={
                      payment === "BANK"
                        ? "btn btn-payment active"
                        : "btn btn-payment"
                    }
                    onClick={() => setPayment("BANK")}
                  >
                    <img src="assets/images/transfer.png" width="120" alt="" />
                  </button>
                </div>
                <div className="col-4 pr-0">
                  <button
                    className={
                      payment === "CC"
                        ? "btn btn-payment active"
                        : "btn btn-payment"
                    }
                    onClick={() => setPayment("CC")}
                  >
                    <img src="assets/images/cc.png" width="90" alt="" />
                  </button>
                </div>
              </div>
              <div>
                <div className="pt-3 mt-4 d-flex justify-content-between">
                  <h6 className="">Sub Total</h6>
                  <h6 className="font-weight-bold">
                    <NumberFormat
                      value={subTotal}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp "}
                    />
                  </h6>
                </div>
                <div className="pt-3 d-flex justify-content-between pb-2">
                  <h6 className="">Biaya Admin</h6>
                  <h6 className="font-weight-bold">
                    <NumberFormat
                      value={fee}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp "}
                    />
                  </h6>
                </div>
                <div className="pt-3 d-flex justify-content-between border-top">
                  <h5 className="font-weight-bold">T O T A L</h5>
                  <h5 className="font-weight-bold">
                    <NumberFormat
                      value={total}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp "}
                    />
                  </h5>
                </div>
                <button class="mt-4 pt-3 pb-3 btn btn-primary btn-block btn-lg">
                  Bayar Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
