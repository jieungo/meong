import React, {useState} from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import MyPage from '../components/MyPage';
import LoginForm from '../components/LoginForm';

const myPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>마이페이지 | 놀멍쉬멍</title>
            </Head>
            <AppLayout>
                { isLoggedIn ? <MyPage setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
            </AppLayout>
        </>
    );
};

export default myPage;