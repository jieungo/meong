import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar, Button } from 'antd';
import styled from 'styled-components';

const Profile = styled(Card.Meta)`
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const TabProfile = () => {
  const { me } = useSelector((state) => state.user);

  return (
      <Profile
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
  );
};

export default TabProfile;