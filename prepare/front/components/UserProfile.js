import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar, Button } from 'antd';
import styled from 'styled-components';

import { logoutRequestAction } from '../reducers/user';
import NicknameEditForm from './NicknameEditForm';

const CardWrapper = styled(Card)`
background-color: white;
height: 20vh;
border-radius: 20px;
box-shadow: grey 1px 1px 8px -7px;
margin-bottom: 10px;

.ant-card-actions > li {
  margin: 0;
  margin-top: 3px;
  border: none;
}

.ant-card-cactions {
  background: #857171;
  border-radius: 10px;
  margin: 0 10px;
  padding: 10px 0;
}
`;


const UserProfile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  return (
    <CardWrapper
      actions={[
        <div key="twit">게시글<br />{me.Posts.length}</div>,
        <div key="followings">팔로잉<br />{me.Followings.length}</div>,
        <div key="followings">팔로워<br />{me.Followers.length}</div>,
      ]}
      >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
        />
    </CardWrapper>
  );
};

export default UserProfile;