import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({post}) => {
    const dispatch = useDispatch();
    const {user, followLoading, unFollowLoading} = useSelector((state) => state.user);
    const isFollowing = user?.Followings.find((v) => v.id === post.User.id);
    const onFollow = useCallback(() => {
        if(isFollowing) {
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: post.User.id,
            })
        } else {
            dispatch({
                type: FOLLOW_REQUEST,
                data: post.User.id,
            })
        }
    },[isFollowing])
    
    return (
        <Button loading={followLoading || unFollowLoading} onClick={onFollow}>
            {isFollowing ? '언팔로우' : '팔로우'}
        </Button>
    );
};

FollowButton.propTypes = {
    post: PropTypes.object.isRequired,
}

export default FollowButton;