import React from 'react'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import './cart-icon.styles.scss'

import { ReactComponent as ShoppingICon } from '../../assets/11.2 shopping-bag.svg.svg';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
const CartIcon = ({ toggleCartHidden , itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingICon className="shopping-icon"/>
    <span className="item-count"> {itemCount} </span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
