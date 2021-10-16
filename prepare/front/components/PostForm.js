import React, { useCallback, useState, useRef } from 'react';
import {Form, Input, Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {addPost} from '../reducers/post';
import styled from 'styled-components';
import Wrapper from '../styles/wrapper.module.css';

const SubmitBtn = styled(Button)`
    background-color: #FFF3D4;
    color: #857171;
    border: none;
    max-width: 600px;
    margin: 20px 0;
    width: 100%;
    margin-bottom: 40px;
    height: 40px;
    font-weight: 500;

    &:hover {
        background-color: #857171;
        border: 1px solid #857171;
        color: white;
    }
`;

const PostForm = () => {
    const { imagePaths } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const imageInput = useRef();
    const onSubmit = useCallback(() => {
        setText('');
        dispatch(addPost)
    },[])
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    },[])
    const onClickUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);
    
    return (
        <Form className={Wrapper.pageWrapper} style={{margin: '10px 0 20px'}} encType='multipart/form-data' onFinish={onSubmit}>
            <div>
                <input type="file" multiple hidden ref={imageInput}/>
                <Button onClick={onClickUpload}>이미지 업로드</Button>
            </div>
            {imagePaths.map((v) => (
                <div key={v} style={{display: 'inline-block'}}>
                    <img src={v} style={{width: '200px'}} alt={v} />
                    <div>
                        <Button>제거</Button>
                    </div>
                </div>
            ))}
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                rows={10}
                placeholder='반려동물에 대한 자유로운 글을 작성해주세요 🐶 🐹'
            />
            <SubmitBtn style={{float:'right'}} htmlType='submit'>작성완료</SubmitBtn>
        </Form>
    );
};

export default PostForm;