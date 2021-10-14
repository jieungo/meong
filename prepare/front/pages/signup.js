import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import SignupForm from '../components/SignupForm';

const signup = () => {
    return (
        <>
        <Head>
            <meta charSet="utf-8" />
            <title>회원가입 | 놀멍쉬멍</title>
        </Head>
        <AppLayout>
            <SignupForm />
        </AppLayout>
      </>
    );
};

export default signup;