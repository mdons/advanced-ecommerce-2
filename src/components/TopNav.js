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
          <a href="#" onClick={e => onChange(e, "tires")}>
            car tires
          </a>
        </li>
        <li>
          <a href="#" onClick={e => onChange(e, "headlights")}>
            car headlights
          </a>
        </li>
        <li>
          <a href="#" onClick={e => onChange(e, "bumpers")}>
            car bumpers
          </a>
        </li>
        <li>
          <a href="#" onClick={e => onChange(e, "audio")}>
            car audiosystems
          </a>
        </li>
        <li>
          <a href="#" onClick={e => onChange(e, "engine")}>
            car engines
          </a>
        </li>
        <li>
          <a href="#">Feedback</a>
        </li>
        <div className="clear" />
      </ul>
    </div>
  );
}

TopNav.propTypes = {
  changeCategory: PropTypes.func.isRequired
};
