import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import {Input} from 'antd';

const home = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>메인페이지 | 놀멍쉬멍</title>
            </Head>
            <AppLayout>
                <h1>Home</h1>
                <Input.Search placeholder="원하는 태그를 입력해보세요" style={{ padding: 20 }}/>
            </AppLayout>
        </>
    );
};

export default home;