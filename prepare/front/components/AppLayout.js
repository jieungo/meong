import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { } from "antd";

const AppLayout = ({ children }) => {
  return (
    <>
      <div>
            <Link href="/"><a><h1>놀멍쉬멍</h1></a></Link>
            <Link href="/writePost"><a>새글작성</a></Link>
            <Link href="/community"><a>커뮤니티</a></Link>
            <Link href="/myPage"><a>마이페이지</a></Link>
            <Link href="/loginModal"><a>로그인</a></Link>
      </div>
      <div>{children}</div>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
