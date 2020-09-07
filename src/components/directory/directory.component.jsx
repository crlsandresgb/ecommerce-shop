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
import { DirectoryMenuContainer } from "./directory.styles";
/**
 * main class
 */
const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);
/**
 * map state
 */
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
