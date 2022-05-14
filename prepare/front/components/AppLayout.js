import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import LoginForm from './LoginForm';
import useInput from '../hooks/useInput';
import { logoutRequestAction } from '../reducers/user';
import TabProfile from './TabProfile';

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
  padding: 20px 0;

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


const SearchBar = styled(SearchInput)`
  width: 30vw;

  .ant-input {
    border: none;
    border-radius: 20px;
  }

  .ant-input-group {
    display: flex;
    align-items: center;
  }

  .ant-btn, 
  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child .ant-input-search-button {
    border: none;
    position: absolute;
    right: -17px;
    top: -16px;
    background: #857171;
    z-index: 1;
    border-radius: 20px !important;
  }
`;

const AppLayout = ({ children }) => {
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
        <SearchBar
          value={searchInput}
          onChange={onChangeSearchInput}
          onSearch={onSearch}
        />
        {me ? <a onClick={onLogOut} style={{marginLeft: 10}} loading={logOutLoading}>로그아웃</a> : <Link href="/signup"><a style={{marginLeft: 10}}>회원가입</a></Link>}
        {me && <TabProfile />}
      </TabWrapper>
      <Row style={{padding: '0 50px'}}>
        {!me && (
          <Col xs={24} md={6}>
            <LoginForm />
          </Col>
        )}
        <Col xs={24} md={16} style={{margin: 'auto'}}>
          {children}
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;