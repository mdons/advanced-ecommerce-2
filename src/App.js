import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import PropTypes from "prop-types";

function App(props) {
  return (
    <div className="App">
      <div className="wrap">
        <div className="header">
          <Header />
          <div className="clear" />
          <SubHeader />
          <div className="clear" />
          <TopNav changeCategory={props.changeCategory} />
        </div>

        <ImageSlider />

        <div className="content">
          <div className="products-box">
            <div className="products">
              {/* <h5>
                <span>FEATURED</span> PRODUCTS
              </h5> */}
              <div className="section group">
                {props.state.products
                  .filter(product => product.category === props.currentCategory)
                  .map(product => (
                    <ProductDetail key={product.id} product={product} />
                  ))}
              </div>
            </div>
            {/* <div className="products products-secondbox">
              <h5>
                <span>Our</span> Specials
              </h5>
              <div className="section group" />
            </div> */}
          </div>
        </div>
        <div className="clear" />
        <Footer />
      </div>
    </div>
  );
}

App.propTypes = {
  changeCategory: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired
};

export default App;
