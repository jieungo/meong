import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css'


const Meong = ({Component}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>놀멍쉬멍</title>
                <link rel="shortcut icon" href="/icon.png"/>
                <link href="https://fonts.googleapis.com/css2?family=Gugi&display=swap" rel="stylesheet"></link>
            </Head>
            <Component />
        </>
    );
};

Meong.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default Meong;