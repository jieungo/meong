import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar, Button } from 'antd';

import { logoutRequestAction } from '../reducers/user';

const FeedProfile = () => {
  const { me } = useSelector((state) => state.user);


  return (
      <>
    <Card
    //   actions={[
        //     <div key="twit">짹짹<br />{me.Posts.length}</div>,
        //     <div key="followings">팔로잉<br />{me.Followings.length}</div>,
        //     <div key="followings">팔로워<br />{me.Followers.length}</div>,
        //   ]}
        >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
        />
    </Card>
    {me.nickname}님 로그인 중
        </>
  );
};

export default FeedProfile;