import React, {useState} from "react";
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import MainPage from '../components/MainPage';
import LoginForm from '../components/LoginForm';

const login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Head>
          <meta charSet="utf-8" />
          <title>로그인 | 놀멍쉬멍</title>
      </Head>
      <AppLayout>
      { isLoggedIn ? <MainPage setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
      </AppLayout>
    </>
  );
};

export default login;
