import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL, KEY } from "../config/db";
function CheckoutPay() {
  const { id } = useParams();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const data = {
      isPaid: true,
    };

    async function fetchMyAPI() {
      let res = await axios.patch(
        URL + `allTransaction/rows/` + id,
        JSON.stringify(data),
        {
          headers: {
            "content-type": "application/json",
            "x-api-key": KEY,
            "cache-control": "no-cache",
          },
        }
      );

      if (res.status === 200) {
        setSuccess(true);
      }
    }

    fetchMyAPI();
  }, []);

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
                <div>
                  {success ? (
                    <p className="mb-3 text-success">Pembayaran berhasil</p>
                  ) : (
                    <div>Mohon tunggu ...</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPay;
