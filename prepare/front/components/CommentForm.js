import React, { useCallback } from 'react';
import {Button, Form, Input} from 'antd';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


const CommentForm = ({post}) => {
    const id = useSelector((state)=> state.user.user?.id);
    const [commentText, onChangeCommentText] = useInput('');
    const onSubmitForm = useCallback(()=> {
        console.log(post.id, commentText);
    },[commentText]);

    return (
        <Form onFinish={onSubmitForm}>
            <div>
                <Input.TextArea
                    placeholder='댓글을 입력해주세요 !'
                    rows={4}
                    value={commentText}
                    onChange={onChangeCommentText}
                />
                <Button htmlType='submit' loading={false}>댓글 작성</Button>
            </div>
        </Form>
    );
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CommentForm;