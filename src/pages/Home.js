import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Product from "../components/Product";
import CartProduct from "../components/CartProduct";

function Home() {
  return (
    <div className="row">
      <div className="col-9">
        <div className="p-5">
          <div className="row">
            <div className="col-9">
              <input
                class="form-control"
                type="text"
                name="cari"
                placeholder="Mau makan apa hari ini ?"
              />
            </div>
          </div>
          <div class="row mt-4 rounded">
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
            <Product
              src="https://awsimages.detik.net.id/community/media/visual/2021/03/29/trik-masak-nasi-goreng-3.jpeg?w=700&q=90"
              name="Nasi Goreng"
              description="Dimasak dengan bumbu rahasia"
              price="30.000"
            />
            <Product
              src="https://media-cdn.tripadvisor.com/media/photo-s/0e/08/51/46/beef-steak-srikandi-restaurant.jpg"
              name="Beef Steak"
              description="Dimasak dengan bumbu rahasia"
              price="30.000"
            />
            <Product
              src="http://kbu-cdn.com/dk/wp-content/uploads/beef-burger-special.jpg"
              name="Beef Burger"
              description="Dimasak dengan bumbu rahasia"
              price="30.000"
            />
            <Product
              src="http://kbu-cdn.com/dk/wp-content/uploads/spaghetti-poll-pedas.jpg"
              name="Spaghetti"
              description="Dimasak dengan bumbu rahasia"
              price="30.000"
            />
            <Product
              src="https://selerasa.com/wp-content/uploads/2015/07/images_mancanegara_Resep_Kebab_00-1200x752.jpg"
              name="Kebab"
              description="Dimasak dengan bumbu rahasia"
              price="30.000"
            />
            <Product
              src="https://asset.kompas.com/crops/DWJqRl2S_A0XNgQT8_9ruHPq83Q=/0x0:1000x667/750x500/data/photo/2020/12/25/5fe576d8a9d24.jpg"
              name="Pizza"
              description="Dimasak dengan bumbu rahasia"
              price="30.000"
            />
          </div>
        </div>
      </div>
      <div className="col-3 cart">
        <div className="p-4">
          <div className="text-center mt-3 pb-4 border-bottom">
            <img src="assets/images/logo.png" alt="Logo" width="150" />
          </div>
          <h5 className="mt-4 mb-4">Pesanan Saya</h5>
          <CartProduct
            src="https://asset.kompas.com/crops/DWJqRl2S_A0XNgQT8_9ruHPq83Q=/0x0:1000x667/750x500/data/photo/2020/12/25/5fe576d8a9d24.jpg"
            name="Pizza"
            price="40.000"
            qty="10"
          />
          <div className="border-top pt-3 mt-5">
            <div className="d-flex justify-content-between">
              <label>T O T A L</label>
              <label>
                <b>Rp 40.000</b>
              </label>
            </div>
            <button className="btn btn-primary btn-block btn-lg">BAYAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
