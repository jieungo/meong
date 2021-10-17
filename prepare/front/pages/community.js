import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from "next/head";
import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard';
import Wrapper from '../styles/wrapper.module.css';

const community = () => {
    const {mainPosts} = useSelector((state) => state.post);
    
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>커뮤니티 | 놀멍쉬멍</title>
            </Head>
            <AppLayout>
            <div className={Wrapper.pageWrapper}>
                {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
            </div>
            </AppLayout>
        </>
    );
};

export default community;