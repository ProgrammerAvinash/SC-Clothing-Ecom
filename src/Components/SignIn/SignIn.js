import React from "react";
import "./SignIn.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handelSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="signIn">
        <h2> I have already an account </h2>
        <span>Sign i with your Email and Password</span>

        <form onSubmit={this.handelSubmit}>
          <input type="email" name="email" value={this.state.value} required />
          <label>Email</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            required
          />

          <label>Password</label>

          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
