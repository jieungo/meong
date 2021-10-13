import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import MainPage from '../components/MainPage';


const home = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>메인페이지 | 놀멍쉬멍</title>
            </Head>
            <AppLayout>
                <MainPage />
            </AppLayout>
        </>
    );
};

export default home;