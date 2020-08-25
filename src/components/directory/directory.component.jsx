/**
 * import core
 */
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
/**
 * redux
 */
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
/**
 * import components
 */
import MenuItem from "../menu-item/menu-item.component";
/**
 * import CSS
 */
import "./directory.styles.scss";
/**
 * main class
 */
const Directory = ({ sections }) => (
  /**
   * set directory component
   */
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);
/**
 * map state
 */
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
