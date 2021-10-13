import React, { useCallback } from 'react';
import {Card, Avatar, Button} from 'antd';
import FollowList from './FollowList';
import styled from 'styled-components';

const MyPage = ({setIsLoggedIn}) => {

    const LogoutBtnWrapper = styled.div`
        display: flex;
        justify-content: flex-end;

        button {
            border: none;
            background-color: transparent;
            color: gray;
        }
    `;

    const CardWrapper = styled.div`
        display: flex;
        justify-content: center;
    `;


    const followingList = [{nickname: '펭수'},{nickname: '펭순'},{nickname:'펭구'}];
    const followList = [{nickname: '수수'},{nickname: '순순'},{nickname:'구구'}];

    const onLogout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <>
        <CardWrapper>
            <Card
            style={{width: '80%'}}
            actions={[
                <div key="meong">멍멍</div>,
                        <div key="followings">팔로잉</div>,
                        <div key="followers">팔로우</div>
                    ]}
                    >
                    <Card.Meta
                        avatar={<Avatar>JE</Avatar>}
                        title="고지은"
                        description="개냥이 키웁니다 우하하"
                        />
                    <br />
                    <LogoutBtnWrapper>
                        <Button onClick={onLogout}>로그아웃</Button>
                    </LogoutBtnWrapper>
                </Card>
        </CardWrapper>
            <div style={{margin: 20}}>
                <FollowList header="나를 팔로잉하는 사람" data={followingList}/>
                <FollowList header="내가 팔로우하는 사람" data={followList}/>
            </div>
        </>
    );
};

export default MyPage;