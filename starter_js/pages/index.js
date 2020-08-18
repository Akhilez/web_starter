import Head from "next/head";
import NextLink from "next/link";
import { urls } from "./settings";
import React from "react";
import { Router } from "next/router";

export default function Landing({ authUser }) {
  if (authUser) Router.push(urls.home);
  return (
    <div>
      <Head>
        <title>My Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to My Project</h1>
        <NextLink href={urls.login}>login</NextLink>
        <NextLink href={urls.signup}>signup</NextLink>
      </main>
    </div>
  );
}
