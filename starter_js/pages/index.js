import Head from "next/head";
import NextLink from "next/link";
import { urls } from "./settings";

export default function Landing() {
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
