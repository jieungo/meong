import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Row, Col } from "antd";

import MyPage from '../components/MyPage';
import Login from './LoginForm';
import WritePost from '../components/WritePost';

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Row style={{display:'flex', alignItems: 'center'}} >
            <Col xs={11}>
                <Link href="/">
                    <a><h1 style={{margin:0, textAlign:'center', fontFamily: 'Gugi'}}>놀멍쉬멍
                    <img src="logoIcon.png" alt="logoImage" style={{width: '24px'}} /></h1></a>
                </Link>
            </Col>
            <Col xs={3}><Link href="/writePost"><a>새글작성</a></Link></Col>
            <Col xs={3}><Link href="/community"><a>커뮤니티</a></Link></Col>
            <Col xs={3}><Link href="/myPage"><a>마이페이지</a></Link></Col>
            <Col xs={3}><Link href="/login"><a>로그인</a></Link></Col>
      </Row>
      <div>{children}</div>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
