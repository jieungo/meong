import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import useInput from '../hooks/useInput';
import { logoutRequestAction } from '../reducers/user';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
  width: 40%;
  padding: 5px 15px;
`;

const MainLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-family: 'Gugi', cursive;
  margin-top: 20px;
  margin-bottom: 20px;

  a {
    color: black;
  }

  img {
    width: 45px;
  }
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  a {
    padding: 5px 15px;

    &:hover {
      background-color: #857171;
      color: white;
      transition: 0.1s;
      border-radius: 20px;
    }
  }
`;

const OtherLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);
  const [searchInput, onChangeSearchInput] = useInput('');

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <div>
      <MainLogo>
        <Link href="/"><a>놀멍쉬멍<img src="logoIcon.png" alt="logoImage" /></a></Link>
      </MainLogo>
      <TabWrapper>
        <Link href="/"><a>피드 </a></Link>
        <Link href="/profile"><a>프로필</a></Link>
        <Link href="/LandingPage"><a>장소 검색</a></Link>
        {me ? <a onClick={onLogOut} loading={logOutLoading}>로그아웃</a> : <Link href="/signup"><a>회원가입</a></Link>}
      </TabWrapper>
      <div>
          {children}
      </div>
    </div>
  );
};

OtherLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OtherLayout;