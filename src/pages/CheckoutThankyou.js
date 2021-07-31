import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { URL, KEY } from "../config/db";
function CheckoutThankyou() {
  const { id } = useParams();
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    async function fetchMyAPI() {
      let res = await axios.get(URL + `byId/rows?id=` + id, {
        headers: {
          "content-type": "application/json",
          "x-api-key": KEY,
          "cache-control": "no-cache",
        },
      });

      if (res.status === 200) {
        setIsPaid(res.data.nodes[0].isPaid);
      }
    }

    fetchMyAPI();
  }, [id]);

  useEffect(() => {
    async function fetchMyAPI() {
      let res = await axios.get(URL + `byId/rows?id=` + id, {
        headers: {
          "content-type": "application/json",
          "x-api-key": KEY,
          "cache-control": "no-cache",
        },
      });

      if (res.status === 200) {
        setIsPaid(res.data.nodes[0].isPaid);
      }
    }

    fetchMyAPI();
  });

  return (
    <div className="bg-header" style={{ minHeight: "100vh" }}>
      <div className="row mr-0 ml-0">
        <div className="col-12 text-center p-4">
          <img src="../assets/images/logo.png" alt="Logo" width="150" />
        </div>
      </div>
      <div className="container checkout">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card checkout-card ">
              <div className="d-block text-center pt-5 pb-5">
                {isPaid ? (
                  <div>
                    <h3>Terimakasih</h3>
                    <p className="mb-3">Pembayaran telah kami terima</p>
                    <img
                      src="../assets/images/check-circle.gif"
                      width="100"
                      alt="success"
                    />
                    <br></br>
                    <Link to="/" class="btn btn-primary mt-5">
                      Kembali ke Home
                    </Link>
                  </div>
                ) : (
                  <div>
                    <div>
                      <h3>Menunggu Pembayaran</h3>
                      <p className="mb-3">
                        Silahkan scan QRcode ini menggunakan<br></br>smartphone
                        anda
                      </p>
                      <img
                        src={
                          `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://react-pos-whd.netlify.app/pay/` +
                          id
                        }
                        alt="qr"
                        width="100"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutThankyou;
