import React from "react";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        {" "}
        Shop{" "}
      </Link>
      <Link to="/shop" className="option">
        {" "}
        Contacts{" "}
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign in{" "}
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <Cart />}
  </div>
);
const mapStateToProps =  createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);
