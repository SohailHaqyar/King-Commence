import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
 class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value }); // this is like putting and ID and then doing this [e.target.id]:e.target.value
  };
  render() {
    return (
      <div>
        <div className="sign-in">
          <h2>I Already Have an Account</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              label="Password"
              required
            />
          </form>
          <div className="button">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in With Google
            </CustomButton>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn