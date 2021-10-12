import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from "next/head";

const community = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>커뮤니티 | 놀멍쉬멍</title>
            </Head>
            <AppLayout>
                <h1>community</h1>
            </AppLayout>
        </>
    );
};

export default community;