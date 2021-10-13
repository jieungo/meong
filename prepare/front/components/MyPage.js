import React, { useCallback } from 'react';
import {Card, Avatar, Button } from 'antd';

const MyPage = ({setIsLoggedIn}) => {
    const onLogout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <Card
            actions={[
                <div key="meong">멍멍</div>,
                <div key="followings">팔로잉</div>,
                <div key="followers">팔로워</div>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>JE</Avatar>}
                title="고지은"
                description="개냥이 키웁니다 우하하"
            />
            <br />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default MyPage;