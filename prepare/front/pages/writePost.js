import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import WritePost from '../components/WritePost';
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';

const writePost = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>새글작성 | 놀멍쉬멍</title>
            </Head>
            <AppLayout>
            { isLoggedIn ? <WritePost /> : <LoginForm />}
            </AppLayout>
        </>
    );
};

export default writePost;