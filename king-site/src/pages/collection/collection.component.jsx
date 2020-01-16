import React from "react";

import CollectionItem from "../../components/collection-item/collection.item";

import { connect } from "react-redux";

import { selectSingleCollection } from "../../redux/shop/shop.selectors";
import "./collection.style.scss";

const CollectionPage = ({ collection: { title, items } }) => (
  <div className="collection-page">
    <h2 className="title"> {title} </h2>
    <div className="items">
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectSingleCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);
