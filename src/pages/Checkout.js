import React, { useState } from "react";
import CheckoutProduct from "../components/CheckoutProduct";

function Checkout() {
  const [payment, setPayment] = useState("");

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
                <CheckoutProduct
                  src="https://asset.kompas.com/crops/DWJqRl2S_A0XNgQT8_9ruHPq83Q=/0x0:1000x667/750x500/data/photo/2020/12/25/5fe576d8a9d24.jpg"
                  name="Pizza"
                  price="40.000"
                  qty="10"
                />
                <CheckoutProduct
                  src="https://asset.kompas.com/crops/DWJqRl2S_A0XNgQT8_9ruHPq83Q=/0x0:1000x667/750x500/data/photo/2020/12/25/5fe576d8a9d24.jpg"
                  name="Pizza"
                  price="40.000"
                  qty="10"
                />
              </div>
              <div className="border-top pt-3 mt-4 d-flex justify-content-between checkout-subtotal">
                <h6 className="">SubTotal</h6>
                <h6 className="font-weight-bold">Rp 300.000</h6>
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
                  <h6 className="font-weight-bold">Rp 30.000</h6>
                </div>
                <div className="pt-3 d-flex justify-content-between pb-2">
                  <h6 className="">Biaya Admin</h6>
                  <h6 className="font-weight-bold">Rp 3000</h6>
                </div>
                <div className="pt-3 d-flex justify-content-between border-top">
                  <h5 className="font-weight-bold">T O T A L</h5>
                  <h5 className="font-weight-bold">Rp 30.000</h5>
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
