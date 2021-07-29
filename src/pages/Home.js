import React, { forwardRef, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Product from "../components/Product";
import CartProduct from "../components/CartProduct";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL, KEY } from "../config/db";
import ProductSkeleton from "../components/ProductSkeleton";
import FlipMove from "react-flip-move";
function Home() {
  const [isBayar, setIsBayar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [listProduct, setListProduct] = useState([]);
  const [listCart, setListCart] = useState([]);

  const FunctionalCart = forwardRef((data, ref) => (
    <div ref={ref}>
      <CartProduct
        key={data.id}
        src={data.picture}
        name={data.name}
        price={data.price}
        qty={data.qty}
        updateQtyCart={updateQtyCart}
        data={data}
      />
    </div>
  ));

  useEffect(() => {
    async function fetchMyAPI() {
      let res = await axios.get(URL + `allProduct/rows`, {
        headers: {
          "content-type": "application/json",
          "x-api-key": KEY,
          "cache-control": "no-cache",
        },
      });

      if (res.status === 200) {
        setListProduct(res.data.nodes);
        setIsLoading(false);
      }
    }

    fetchMyAPI();
  }, []);

  const updateQtyCart = (data, qty = null) => {
    let index = listCart.findIndex((item) => item.id === data.id);
    let updateCart = [...listCart];
    if (qty === null) {
      updateCart[index]["qty"] += 1;
    } else {
      updateCart[index]["qty"] = Number(qty);
      if (Number(updateCart[index]["qty"]) > 0) {
        updateCart[index]["qty"] = Number(qty);
      } else {
        updateCart.splice(index, 1);
      }
    }

    // if (method === "plus") {
    //   updateCart[index]["qty"] += 1;
    // } else if (method === "minus") {
    //   // if (Number(updateCart[index]["qty"]) > 0) {
    //   updateCart[index]["qty"] -= 1;
    //   // } else {
    //   // updateCart.splice(index, 1);
    //   // }
    // }
    setListCart(updateCart);
  };

  const addToCart = (data) => {
    if (listCart.filter((cart) => cart.id === data.id).length) {
      updateQtyCart(data);
    } else {
      let newData = {
        id: data.id,
        qty: 1,
        name: data.name,
        picture: data.pictureUrl,
        price: data.price,
      };
      setListCart((listCart) => [...listCart, newData]);
    }
  };

  return (
    <div className="row mr-0 ml-0">
      {isBayar === true ? (
        <div className="col-9 pr-0">
          <div className="text-center pt-5 mt-5">
            <img src="assets/images/approve.svg" width="300" alt="" />
            <p className="mt-4">Apakah pesananmu sudah sesuai ?</p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-secondary mr-2 btn-lg"
                style={{ width: "200px" }}
                onClick={() => setIsBayar(false)}
              >
                BELUM
              </button>
              <Link
                to="/checkout"
                className="btn btn-primary btn-lg"
                style={{ width: "200px" }}
              >
                SUDAH
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-9 pr-0">
          <div className="p-5">
            <div className="row">
              <div className="col-9">
                <input
                  className="form-control"
                  type="text"
                  name="cari"
                  placeholder="Mau makan apa hari ini ?"
                />
              </div>
            </div>
            <div className="row mt-4 rounded">
              <div className="col-12">
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  dynamicHeight="20px"
                >
                  <div>
                    <img
                      src="assets/images/banner-1.jpg"
                      alt=""
                      style={{ borderRadius: "25px" }}
                    />
                  </div>
                  <div>
                    <img
                      src="assets/images/banner-2.jpg"
                      alt=""
                      style={{ borderRadius: "25px" }}
                    />
                  </div>
                </Carousel>
              </div>
            </div>
            <div className="row mt-4">
              {isLoading ? (
                <div>
                  <ProductSkeleton />
                </div>
              ) : (
                listProduct.map((data) => (
                  <div
                    className="col-4"
                    key={data.id}
                    onClick={() => addToCart(data)}
                  >
                    <Product
                      url={data.pictureUrl}
                      name={data.name}
                      description={data.descriptionShort}
                      price={data.price}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      <div className="col-3 cart">
        <div className="p-4">
          <div className="text-center mt-3 pb-4 border-bottom">
            <img src="assets/images/logo.png" alt="Logo" width="150" />
          </div>
          <h5 className="mt-4 mb-4">Pesanan Saya</h5>
          <FlipMove>
            {listCart.map((data) => (
              <FunctionalCart key={data.id} {...data} />
            ))}
          </FlipMove>
          <div className="border-top pt-3 mt-5">
            <div className="d-flex justify-content-between">
              <label>T O T A L</label>
              <label>
                <b>Rp 40.000</b>
              </label>
            </div>
            {isBayar === false && (
              <button
                className="btn btn-primary btn-block btn-lg"
                onClick={() => setIsBayar(true)}
              >
                BAYAR
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
