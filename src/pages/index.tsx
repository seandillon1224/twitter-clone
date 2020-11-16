import * as React from 'react';
import Head from "next/head";
import Test from 'components/Test';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <Test/>
      </Head>
    </>
  );
}
