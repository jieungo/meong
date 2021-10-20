import React , {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LIKE_REQUEST, UNLIKE_REQUEST } from '../reducers/post';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types'

const LikeButton = ({post}) => {
    const dispatch = useDispatch();
    const {id} = useSelector((state) => state.user);
    const Liked = post?.Liked.find((v) => v.id === id);
    const onToggleLike = useCallback(() => {
        if(Liked) {
            dispatch({
                type: UNLIKE_REQUEST,
                data: post.id,
            })
        } else {
            dispatch({
                type: LIKE_REQUEST,
                data: post.id,
            })
        }
    },[]);
    return (
        <div>
            {Liked 
            ? <HeartFilled style={{color:'red'}} onClick={onToggleLike}>
                {post.Liked.length}</HeartFilled>
            :  <HeartOutlined onClick={onToggleLike}>
                {post.Liked.length}</HeartOutlined>}
        </div>
    );
};

LikeButton.propTypes = {
    post: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default LikeButton;