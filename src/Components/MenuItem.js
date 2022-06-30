import React from "react";

import "./MenuItem.scss";

const MenuItem = ({ title, imageURL }) => (
  <div
    className={` menu-item`}
    style={{
      backgroundImage: `url(${imageURL})`,
      backgroundSize: "100% 100% ",
    }}
  >
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
