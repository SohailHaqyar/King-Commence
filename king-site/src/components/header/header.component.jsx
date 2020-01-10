import React from "react";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart/cart.component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

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
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
