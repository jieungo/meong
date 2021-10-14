import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Row, Col } from "antd";
import styles from '../styles/styles.module.css';


const AppLayout = ({ children }) => {

  return (
    <>
      <Link href="/">
        <a><h1 className={styles.logo}>놀멍쉬멍
          <img src="logoIcon.png" alt="logoImage" style={{width: '24px'}} /></h1>
        </a>
      </Link>
      <div>{children}</div>
      <Row className={styles.bottomNav}>
        <Col xs={4}><Link href="/writePost"><a>새글작성</a></Link></Col>
        <Col xs={4}><Link href="/community"><a>커뮤니티</a></Link></Col>
        <Col xs={8}>
          <Link href="/">
            <a><img className={styles.centerNav} src='../icon.png'/></a>
          </Link>
        </Col>
        <Col xs={4}><Link href="/myPage"><a>마이페이지</a></Link></Col>
        <Col xs={4}><Link href="/login"><a>로그인</a></Link></Col>
      </Row>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
