import React from "react";
import PropTypes from "prop-types";

export default function TopNav(props) {
  const onChange = (event, category) => {
    event.preventDefault();
    props.changeCategory(category);
  };

  return (
    <div className="top-nav">
      <ul>
        <li>
          <a href="#" onClick={e => onChange(e, "lights")}>
            car lights
          </a>
        </li>
        <li>
          <a href="#" onClick={e => onChange(e, "wheels")}>
            Car wheels
          </a>
        </li>
        <li>
          <a href="#" onClick={e => onChange(e, "cBumpers")}>
            car bumpers
          </a>
        </li>
        <li>
          <a href="#" onClick={e => onChange(e, "audiosystems")}>
            car audiosystem
          </a>
        </li>
        <li>
          <a href="#" onClick={e => onChange(e, "tBumpers")}>
            Truck bumpers
          </a>
        </li>
        <li>
          <a href="#">Feedback</a>
        </li>
        <div className="clear"> </div>
      </ul>
    </div>
  );
}

TopNav.propTypes = {
  changeCategory: PropTypes.func.isRequired
};
