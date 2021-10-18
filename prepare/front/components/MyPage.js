import React, { useCallback } from 'react';
import {Card, Avatar, Button} from 'antd';
import FollowList from './FollowList';
import styled from 'styled-components';
import page from '../styles/wrapper.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {logoutRequestAction} from '../reducers/user';

    const LogoutBtnWrapper = styled.div`
        display: flex;
        justify-content: flex-end;

        button {
            border: none;
            background-color: transparent;
            color: gray;
        }
    `;

const MyPage = () => {
    const dispatch = useDispatch();
    const {isLoggingOut, user} = useSelector((state) => state.user);
    const followingList = [{nickname: '펭수'},{nickname: '펭순'},{nickname:'펭구'}];
    const followList = [{nickname: '수수'},{nickname: '순순'},{nickname:'구구'}];

    const onLogout = useCallback(() => {
        console.log(isLoggingOut);
        dispatch(logoutRequestAction());
    }, []);

    return (
        <div className={page.pageWrapper}>
        <div>
            <Card
            cover={
            <img
                alt="my_profile_pic"
                src="../cute.jpeg"
            />}
            actions={[
                <div key="meong">멍멍</div>,
                        <div key="followings">팔로잉</div>,
                        <div key="followers">팔로우</div>
                    ]}
                    >
                    <Card.Meta
                        avatar={<Avatar>user.nickname[0]</Avatar>}
                        title={user.nickname}
                        description="개냥이 키웁니다 우하하"
                        />
                    <br />
                    <LogoutBtnWrapper>
                        <Button onClick={onLogout} loading={isLoggingOut}>로그아웃</Button>
                    </LogoutBtnWrapper>
                </Card>
        </div>
        <div>
            <div style={{margin: '20px 0'}}>
                <FollowList header="나를 팔로잉하는 사람" data={followingList}/>
                <FollowList header="내가 팔로우하는 사람" data={followList}/>
            </div>
        </div>
        </div>
    );
};

export default MyPage;