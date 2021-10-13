import React, {useState} from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import WritePost from '../components/WritePost';
import LoginForm from '../components/LoginForm';

const writePost = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>새글작성 | 놀멍쉬멍</title>
            </Head>
            <AppLayout>
            { isLoggedIn ? <WritePost setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
            </AppLayout>
        </>
    );
};

export default writePost;