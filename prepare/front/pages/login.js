import React from "react";
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import MainPage from '../components/MainPage';
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';

const login = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <>
      <Head>
          <meta charSet="utf-8" />
          <title>로그인 | 놀멍쉬멍</title>
      </Head>
      <AppLayout>
      { isLoggedIn ? <MainPage /> : <LoginForm />}
      </AppLayout>
    </>
  );
};

export default login;
