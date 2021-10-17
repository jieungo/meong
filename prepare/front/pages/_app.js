import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css'
import '../styles/global.css';
import wrapper from '../store/configureStore';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Meong = ({Component}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>놀멍쉬멍</title>
                <link rel="shortcut icon" href="/icon.png"/>
                <link href="https://fonts.googleapis.com/css2?family=Gugi&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;500&display=swap" rel="stylesheet"></link>
            </Head>
            <Component />
        </>
    );
};

Meong.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(Meong);