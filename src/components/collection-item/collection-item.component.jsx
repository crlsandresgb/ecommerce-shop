/**
 * import core
 */
import React from "react";
/**
 * import css
 */
import "./collection-item.styles.scss";
/**
 * main function
 */
const CollectionItem = ({ id, imageUrl, name, price }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
  </div>
);

export default CollectionItem;
