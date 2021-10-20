import React, { useCallback, useEffect } from 'react';
import {Button, Form, Input} from 'antd';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';


const CommentForm = ({post}) => {
    const dispatch = useDispatch();
    const id = useSelector((state)=> state.user.user?.id);
    const { addCommentDone } = useSelector((state) => state.post);

    useEffect(() => {
        if(addCommentDone) {
            setCommentText('');
        }
    }, [addCommentDone])
    
    const [commentText, onChangeCommentText, setCommentText] = useInput('');
    const onSubmitForm = useCallback(()=> {
        dispatch({ //이 컴포넌트에서만 사용하면 이렇게 디스패치하고, 재사용한다면 reducer에서 액션함수 만들어서 사용하기
            type: ADD_COMMENT_REQUEST,
            data: {content: commentText, postId: post.id, userId: id},
        })
    },[commentText, id]);

    return (
        <Form onFinish={onSubmitForm}>
            <div>
                <Input.TextArea
                    placeholder='댓글을 입력해주세요 !'
                    rows={4}
                    value={commentText}
                    onChange={onChangeCommentText}
                />
                <Button htmlType='submit'>댓글 작성</Button>
            </div>
        </Form>
    );
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CommentForm;