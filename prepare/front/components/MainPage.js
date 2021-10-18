import React from 'react';
import {Input} from 'antd';
import styled from 'styled-components';
import Slider from "react-slick";
import Wrapper from '../styles/wrapper.module.css';

const SearchInput = styled(Input.Search)`

    margin-top: 30px;
    padding: 20px;
    
`;

const MainPage = () => {
    const settings = {
        dots: true, 
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        fade: true,
    };

    return (
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
            <SearchInput placeholder="원하는 태그를 입력해보세요"/>
        </div>
    );
};

export default MainPage;