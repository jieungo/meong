import React from "react";
import AppLayout from "../components/AppLayout";
import Head from 'next/head';

import LoginForm from '../components/LoginForm';

const login = () => {
  return (
    <>
      <Head>
          <meta charSet="utf-8" />
          <title>로그인 | 놀멍쉬멍</title>
      </Head>
      <AppLayout>
        <LoginForm />
      </AppLayout>
    </>
  );
};

export default login;
