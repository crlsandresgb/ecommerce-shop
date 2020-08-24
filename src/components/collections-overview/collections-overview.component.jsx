/**
 * import core
 */
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
/**
 * redux
 */
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
/**
 * import css
 */
import "./collections-overview.styles.scss";
/**
 * import component
 */
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
