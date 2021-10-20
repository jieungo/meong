import React, { useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import Head from "next/head";
import { useSelector, useDispatch } from 'react-redux';
import PostCard from '../components/PostCard';
import Wrapper from '../styles/wrapper.module.css';
import { LOAD_POST_REQUEST } from '../reducers/post';
import { useInView } from 'react-intersection-observer';

const community = () => {
    const {mainPosts, hasMorePost, loadPostLoading} = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_POST_REQUEST,
        })
    },[]) //useEffect로 컴포넌트디드마운트 효과 (뒤에 빈배열로 해놔야한다)
    const [ref, inView] = useInView();

    useEffect(
        () => {
          if (inView && hasMorePost && !loadPostLoading) {
            const lastId = mainPosts[mainPosts.length - 1]?.id;
            dispatch({
              type: LOAD_POST_REQUEST,
              lastId,
            });
          }
        },
        [inView, hasMorePost, loadPostLoading, mainPosts],
      );

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>커뮤니티 | 놀멍쉬멍</title>
            </Head>
            <AppLayout>
            <div className={Wrapper.pageWrapper}>
                {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
                <div ref={hasMorePost && !loadPostLoading ? ref : undefined} />
            </div>
            </AppLayout>
        </>
    );
    };

export default community;