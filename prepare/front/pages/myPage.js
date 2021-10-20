import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import MyPage from '../components/MyPage';
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';

const myPage = () => {
    const {user} = useSelector((state) => state.user);
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>마이페이지 | 놀멍쉬멍</title>
            </Head>
            <AppLayout>
                {user? <MyPage /> : <LoginForm /> }
            </AppLayout>
        </>
    );
};

export default myPage;