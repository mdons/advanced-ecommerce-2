import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";

function App(props) {
  return (
    <div className="App">
      <div className="wrap">
        <div className="header">
          <Header />
          <div className="clear"> </div>
          <SubHeader />
          <div className="clear"> </div>
          <TopNav />
        </div>

        <ImageSlider />

        <div className="content">
          <div className="products-box">
            <div className="products">
              <h5>
                <span>FEATURED</span> PRODUCTS
              </h5>
              <div className="section group">
                <ProductDetail
                  product={{ src: "images/g3.png", price: <h4>$512.00</h4> }}
                />
                <ProductDetail
                  product={{ src: "images/g1.jpg", price: <h4>$300.00</h4> }}
                />
                <ProductDetail
                  product={{ src: "images/g2.jpg", price: <h4>$120.00</h4> }}
                />
                <ProductDetail
                  product={{ src: "images/g3.png", price: <h4>$500.00</h4> }}
                />
                <ProductDetail
                  product={{ src: "images/g4.jpg", price: <h4>$120.00</h4> }}
                />
              </div>
            </div>
            <div className="products products-secondbox">
              <h5>
                <span>Our</span> Specials
              </h5>
              <div className="section group">
                <ProductDetail
                  product={{
                    src: "images/g1.jpg",
                    price: (
                      <h4>
                        <span>$600.00</span>$512.00
                      </h4>
                    )
                  }}
                />
                <ProductDetail
                  product={{
                    src: "images/g6.jpg",
                    price: (
                      <h4>
                        <span>$400.00</span>$352.00
                      </h4>
                    )
                  }}
                />
                <ProductDetail
                  product={{
                    src: "images/g7.png",
                    price: (
                      <h4>
                        <span>$300.00</span>$202.00
                      </h4>
                    )
                  }}
                />
                <ProductDetail
                  product={{
                    src: "images/g8.png",
                    price: (
                      <h4>
                        <span>$400.00</span>$322.00
                      </h4>
                    )
                  }}
                />
                <ProductDetail
                  product={{
                    src: "images/g1.jpg",
                    price: (
                      <h4>
                        <span>$700.00</span>$602.00
                      </h4>
                    )
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="clear"> </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
