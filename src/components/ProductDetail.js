import React from "react";
import PropTypes from "prop-types";

export default function ProductDetail(props) {
  return (
    <div className="grid_1_of_5 images_1_of_5">
      <img src={props.product.src} />
      <h3>Lorem Ipsum is simply </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
        reprehenderit.
      </p>
      {props.product.price}
      <div className="button">
        <span>
          <a href="singlepage.html">Read More</a>
        </span>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
};
