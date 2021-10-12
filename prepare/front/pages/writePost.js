import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const writePost = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>새글작성 | 놀멍쉬멍</title>
            </Head>
            <AppLayout>
                <h1>writePost</h1>
            </AppLayout>
        </>
    );
};

export default writePost;