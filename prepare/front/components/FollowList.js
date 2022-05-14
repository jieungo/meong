import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST } from '../reducers/user';


const ListWrapper = styled(List)`
background-color: white;
height: 100%;
width: 90%;
border-radius: 20px;
box-shadow: grey 1px 1px 8px -7px;
margin-bottom: 10px;
margin-right: 5px;
margin-left: 5px;

.ant-list-item {
  width: 100%;
}
`;

const FollowList = ({ header, data, onClickMore, loading }) => {
  const dispatch = useDispatch();
  const onCancel = (id) => () => {
    if (header === '팔로잉') {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: id,
      });
    }
    dispatch({
      type: REMOVE_FOLLOWER_REQUEST,
      data: id,
    });
  };

  return (
    <ListWrapper>
      <List
        style={{ marginBottom: 20}}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>{header}</div>}
        loadMore={<div style={{ textAlign: 'center', margin: '10px 0' }}><Button onClick={onClickMore} loading={loading}>더 보기</Button></div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={{ marginTop: 20 }}>
            <Card actions={[<StopOutlined key="stop" onClick={onCancel(item.id)} />]}>
              <Card.Meta description={item.nickname} />
            </Card>
          </List.Item>
        )}
        />
    </ListWrapper>
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;