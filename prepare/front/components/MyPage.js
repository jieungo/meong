import React, { useCallback, useEffect } from 'react';
import {Card, Avatar, Button} from 'antd';
import FollowList from './FollowList';
import styled from 'styled-components';
import page from '../styles/wrapper.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {LOG_OUT_REQUEST} from '../reducers/user';

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
    const {logOutLoading, user} = useSelector((state) => state.user);

    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
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
                        <div key="writedPost">작성한 글<br />{user.Posts.length}</div>,
                        <div key="followings">팔로잉<br />{user.Followings.length}</div>,
                        <div key="followers">팔로우<br />{user.Followers.length}</div>
                    ]}
                    >
                    <Card.Meta
                        avatar={<Avatar>{user.nickname[0]}</Avatar>}
                        title={user.nickname}
                        description="개냥이 키웁니다 우하하"
                        />
                    <br />
                    <LogoutBtnWrapper>
                        <Button onClick={onLogout} loading={logOutLoading}>로그아웃</Button>
                    </LogoutBtnWrapper>
                </Card>
        </div>
        <div>
            <div style={{margin: '20px 0'}}>
                <FollowList header="나를 팔로잉하는 사람" data={user.Followings}/>
                <FollowList header="내가 팔로우하는 사람" data={user.Followers}/>
            </div>
        </div>
        </div>
    );
};

export default MyPage;