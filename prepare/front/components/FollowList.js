import React from 'react';
import { List, Card, Button } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BtnWrapper = styled.div`
    text-align: center;
    margin-bottom: 16px;
`;

const FollowList = ({data, header}) => {
    return (
    <List
        style={{marginBottom: 20}}
        grid={{ gutter: 4, column: 3, xs:1}}
        size='small'
        header={<div>{header}</div>}
        loadMore={<BtnWrapper><Button>더보기</Button></BtnWrapper>}
        dataSource={data}
        bordered
        renderItem={item => (
        <List.Item >
            <Card style={{width:'100%'}}title={item.title}>
                <Card.Meta description={item.nickname} />
            </Card>
        </List.Item>
        )}
    />
    );
};

FollowList.propTypes = {
    data: PropTypes.string.isRequired,
    header: PropTypes.array.isRequired,
}

export default FollowList;