import React from "react";
import AppLayout from "../components/AppLayout";
import Head from 'next/head';

const loginModal = () => {
  return (
    <>
      <Head>
          <meta charSet="utf-8" />
          <title>로그인 | 놀멍쉬멍</title>
      </Head>
      <AppLayout>
        <h1>login</h1>
      </AppLayout>
    </>
  );
};

export default loginModal;
