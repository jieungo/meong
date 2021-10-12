import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>메인페이지 | 놀멍쉬멍</title>
            </Head>
            <AppLayout>
                <h1>Home</h1>
            </AppLayout>
        </>
    );
};

export default Home;