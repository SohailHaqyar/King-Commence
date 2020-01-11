import React from 'react'

import './cart-icon.styles.scss'

import { ReactComponent as ShoppingICon } from '../../assets/11.2 shopping-bag.svg.svg';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingICon className="shopping-icon"/>
    <span className="item-count"> 0 </span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon);
