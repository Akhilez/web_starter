import React from "react";
import { SignOutButton } from "../auth/login/signout";
import Router from "next/router";
import { urls } from "../settings";
import { withAuth } from "../auth/firebase";

class Home extends React.Component {
  constructor({ authUser, ...props }) {
    super(props);
    this.authUser = authUser;
  }

  componentDidMount() {
    // if (this.authUser == null) Router.push(urls.login);
  }

  render() {
    if (this.authUser == null) return <div>404</div>;
    return (
      <div>
        Welcome!
        <br />
        <SignOutButton>Sign Out</SignOutButton>
      </div>
    );
  }
}

export default withAuth(Home);
