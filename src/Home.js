import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://m.media-amazon.com/images/I/817HU25c2uL._SX3000_.jpg"
          alt="ad"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="jkfjfjaf"
            title="Billy Summers: Number-one New York Times Best Seller

            From legendary storyteller Stephen King, whose “restless imagination is a power that cannot be contained” (The New York Times Book Review), comes a thrilling new novel about a good guy in a bad job."
            price={14.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Books/XCM_CUTTLE_1349493_1778860_US_3968818_750x375_en_US.jpg"
            rating={5}
          />
          <Product
            title="Damnation Spring: An epic, immersive debut, Damnation Spring is the deeply human story of a Pacific Northwest logging town wrenched in two by a mystery that threatens to derail its way of life."
            price={14.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Books/XCM_CUTTLE_1349493_1778859_US_3968819_750x375_en_US.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Charcoal"
            price={79.99}
            image="https://m.media-amazon.com/images/I/51EVETDOOeL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            title="New Apple iPad Pro (11-inch, Wi-Fi + Cellular, 512GB) - Silver (2nd Generation) with AppleCare+ Bundle"
            price={1523.95}
            image="https://m.media-amazon.com/images/I/618cQhX15dL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            title="Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Twilight Blue"
            price={99.99}
            image="https://m.media-amazon.com/images/I/71yEX4ugtJL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="SAMSUNG 85-inch Class QLED Q900T Series - Real 8K Resolution Direct Full Array 32X Quantum HDR 32X Smart TV with Alexa Built-in (QN85Q900TSFXZA, 2020 Model)"
            price={1895.96}
            image="https://m.media-amazon.com/images/I/61ZsZksHnSL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
