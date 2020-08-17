import app from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import React from "react";

import firebase_config_prod from "../../keys/firebase_config_prod";
import firebase_config_dev from "../../keys/firebase_config_dev";

const config =
  process.env.NODE_ENV === "production"
    ? firebase_config_prod
    : firebase_config_dev;

export class Firebase {
  constructor() {
    if (!app.apps.length) app.initializeApp(config);
    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export const FirebaseContext = React.createContext(null);

export const withFirebase = (Component) => (props) => (
  <FirebaseContext.Consumer>
    {(firebase) => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);
