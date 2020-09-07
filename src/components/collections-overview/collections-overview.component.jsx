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
import { CollectionsOverviewContainer } from "./collections-overview.styles";
/**
 * import component
 */
import CollectionPreview from "../../components/collection-preview./collection-preview..component";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
