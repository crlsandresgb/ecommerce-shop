/**
 * import core
 */
import React from "react";
import { withRouter } from "react-router-dom";
/**
 * import css
 */
import "./menu-item.styles.scss";
/**
 * main component
 */
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  /**
   * main container
   */
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    {/**image container */}
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    {/**inner container */}
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
