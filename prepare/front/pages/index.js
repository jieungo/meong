import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import MainPage from '../components/MainPage';
import Slider from "react-slick";
import Wrapper from '../styles/wrapper.module.css';


const home = () => {
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        fade: true,
    };

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>메인페이지 | 놀멍쉬멍</title>
            </Head>
            <AppLayout>
                <div className={Wrapper.pageWrapper}>
                    <Slider {...settings}>
                        <div>
                            <img src='../3.jpeg'/>
                        </div>
                        <div>
                            <img src='../5.jpeg'/>
                        </div>
                        <div>
                            <img src='../4.jpeg'/>
                        </div>
                    </Slider>
                    <MainPage />
                </div>
            </AppLayout>
        </>
    );
};

export default home;