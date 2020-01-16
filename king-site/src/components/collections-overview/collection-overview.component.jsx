import React from "react";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection.preview.component";
import { createStructuredSelector } from 'reselect'

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
    <h1>Under construction</h1>
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});


export default connect(
  mapStateToProps,
  
)(CollectionsOverview);
