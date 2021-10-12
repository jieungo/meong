import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const myPage = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>마이페이지 | 놀멍쉬멍</title>
            </Head>
            <AppLayout>
                <h1>myPage</h1>
            </AppLayout>
        </>
    );
};

export default myPage;